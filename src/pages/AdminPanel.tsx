import React, { useEffect, useState } from "react";
import {
  Plus,
  Trash2,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  FileText,
  Briefcase,
  Settings,
  Edit2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const API_BASE = import.meta.env?.VITE_API_BASE_URL ?? "http://localhost:3000";

type Service = {
  id?: number;
  title: string;
  description?: string;
  longDescription?: string;
  features?: string[];
  benefits?: string[];
  link?: string;
  slug?: string;
  icon?: string;
};
type CaseStudy = { id?: number; title: string; client?: string; category?: string; description?: string; link?: string };
type BlogPost = { id?: number; title?: string; excerpt?: string; content?: string; author?: string; date?: string; link?: string };

const slugify = (s: string) => s.toString().toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* Small UI helpers: Toasts, ConfirmModal, Drawer */
const Toast: React.FC<{ type: "success" | "error" | "info"; message: string; onClose: () => void }> = ({ type, message, onClose }) => {
  const icon = type === "success" ? <CheckCircle size={16} /> : type === "error" ? <AlertCircle size={16} /> : <Plus size={16} />;
  return (
    <div className="flex items-start gap-3 bg-white border rounded-md px-3 py-2 shadow-sm">
      <div className="pt-0.5 text-slate-600">{icon}</div>
      <div className="text-sm text-slate-700">{message}</div>
      <button onClick={onClose} className="ml-auto text-slate-400 hover:text-slate-600 p-1">
        <X size={14} />
      </button>
    </div>
  );
};

const ConfirmModal: React.FC<{
  open: boolean;
  title?: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
}> = ({ open, title = "Confirm", description = "Are you sure?", onConfirm, onCancel }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 border-b">
          <div className="font-semibold">{title}</div>
        </div>
        <div className="p-4">
          <div className="text-sm text-slate-600">{description}</div>
        </div>
        <div className="p-4 flex justify-end gap-2 border-t">
          <button onClick={onCancel} className="px-4 py-2 rounded-md">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 rounded-md bg-red-600 text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

const Drawer: React.FC<{ open: boolean; title?: string; onClose: () => void; children?: React.ReactNode }> = ({ open, title, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-60 flex">
      <div className="flex-1" onClick={onClose} />
      <div className="w-full max-w-md bg-white h-full shadow-lg overflow-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="font-semibold">{title}</div>
          <button onClick={onClose} className="p-2 rounded hover:bg-slate-100">
            <X size={18} />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

/* Reusable icon button */
const IconButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { title?: string }> = ({ children, title, ...rest }) => (
  <button {...rest} title={title} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/5 hover:bg-slate-800/10 text-sm font-medium border border-slate-200">
    {children}
  </button>
);

const StatCard: React.FC<{ label: string; value: number; hint?: string }> = ({ label, value, hint }) => (
  <div className="bg-white shadow-sm rounded-lg p-3 text-center">
    <div className="text-xs text-slate-400">{label}</div>
    <div className="text-xl font-semibold mt-1">{value}</div>
    {hint && <div className="text-xs text-slate-400 mt-1">{hint}</div>}
  </div>
);

export default function AdminPanel() {
  const [services, setServices] = useState<Service[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // UI state
  const [activeTab, setActiveTab] = useState<"services" | "cases" | "posts">("services");
  const [showModal, setShowModal] = useState<null | "service" | "case" | "post">(null);
  const [collapsed, setCollapsed] = useState(false);

  // search/filter
  const [query, setQuery] = useState("");

  // toasts
  const [toasts, setToasts] = useState<{ id: string; type: "success" | "error" | "info"; message: string }[]>([]);
  const pushToast = (type: "success" | "error" | "info", message: string) => {
    const id = Math.random().toString(36).slice(2, 9);
    setToasts((t) => [...t, { id, type, message }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  };

  // confirm modal for delete
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmPayload, setConfirmPayload] = useState<{ type: "services" | "caseStudies" | "blogPosts"; id?: number } | null>(null);

  // drawer (edit)
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);

  // form states
  const [newService, setNewService] = useState<Service>({ title: "", description: "", longDescription: "", features: [], benefits: [] });
  const [newCase, setNewCase] = useState({ title: "", client: "", category: "", description: "" });
  const [newPost, setNewPost] = useState({ title: "", excerpt: "", content: "", author: "" });

  const loadAll = async () => {
    setLoading(true);
    try {
      // Try to fetch from API
      const [sRes, cRes, bRes] = await Promise.all([
        fetch(`${API_BASE}/services`).catch(() => null),
        fetch(`${API_BASE}/caseStudies`).catch(() => null),
        fetch(`${API_BASE}/blogPosts`).catch(() => null)
      ]);

      const s = sRes?.ok ? await sRes.json() : null;
      const c = cRes?.ok ? await cRes.json() : null;
      const b = bRes?.ok ? await bRes.json() : null;

      if (!s || !c || !b) {
        console.warn("API unavailable, falling back to mock data");
        // Import mock data dynamically to avoid circular dependencies if any, 
        // or just use what we have if we import it at top level.
        // For now, let's assume we can import it.
        const { mockServices, mockCaseStudies, mockBlogPosts } = await import("@/lib/mockData");

        setServices(s || mockServices);
        setCaseStudies(c || mockCaseStudies);
        setBlogPosts(b || mockBlogPosts);

        if (!s || !c || !b) {
          pushToast("info", "Backend unavailable. Showing demo data.");
        }
      } else {
        setServices(s);
        setCaseStudies(c);
        setBlogPosts(b);
      }
      setError(null);
    } catch (err: any) {
      console.error("Load error:", err);
      // Fallback
      const { mockServices, mockCaseStudies, mockBlogPosts } = await import("@/lib/mockData");
      setServices(mockServices);
      setCaseStudies(mockCaseStudies);
      setBlogPosts(mockBlogPosts);
      pushToast("info", "Loaded demo data (Backend offline)");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const post = async (path: string, item: any) => {
    const res = await fetch(`${API_BASE}/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error("Failed");
    return res.json();
  };

  const put = async (path: string, id: number | undefined, item: any) => {
    if (!id) throw new Error("No id");
    const res = await fetch(`${API_BASE}/${path}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error("Failed");
    return res.json();
  };

  const del = async (path: string, id?: number) => {
    if (!id) return;
    const res = await fetch(`${API_BASE}/${path}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed");
    return res;
  };

  // add handlers
  const addService = async (e?: React.FormEvent) => {
    e?.preventDefault();
    try {
      const slug = slugify(newService.title || "service");
      const item = { ...newService, slug, link: `/services/${slug}` };

      try {
        await post("services", item);
        pushToast("success", "Service added");
      } catch (err) {
        console.warn("Backend offline, adding locally");
        // Offline fallback
        const newItem = { ...item, id: Date.now() }; // temporary ID
        setServices(prev => [...prev, newItem]);
        pushToast("info", "Service added (Local only)");
      }

      setNewService({ title: "", description: "" });
      setShowModal(null);
      // await loadAll(); // Don't reload if we just did a local update
      if (!error) loadAll();
    } catch (err: any) {
      setError(err.message);
      pushToast("error", err.message || "Failed to add");
    }
  };

  const addCase = async (e?: React.FormEvent) => {
    e?.preventDefault();
    try {
      const slug = slugify(newCase.title || "case");
      const item = { ...newCase, link: `/case-studies/${slug}` };

      try {
        await post("caseStudies", item);
        pushToast("success", "Case added");
      } catch (err) {
        console.warn("Backend offline, adding locally");
        const newItem = { ...item, id: Date.now() };
        setCaseStudies(prev => [...prev, newItem]);
        pushToast("info", "Case added (Local only)");
      }

      setNewCase({ title: "", client: "", category: "", description: "" });
      setShowModal(null);
      if (!error) loadAll();
    } catch (err: any) {
      setError(err.message);
      pushToast("error", err.message || "Failed to add");
    }
  };

  const addPost = async (e?: React.FormEvent) => {
    e?.preventDefault();
    try {
      const slug = slugify(newPost.title || "post");
      const item = { ...newPost, link: `/blog/${slug}` };

      try {
        await post("blogPosts", item);
        pushToast("success", "Post added");
      } catch (err) {
        console.warn("Backend offline, adding locally");
        const newItem = { ...item, id: Date.now() };
        setBlogPosts(prev => [...prev, newItem]);
        pushToast("info", "Post added (Local only)");
      }

      setNewPost({ title: "", excerpt: "", content: "", author: "" });
      setShowModal(null);
      if (!error) loadAll();
    } catch (err: any) {
      setError(err.message);
      pushToast("error", err.message || "Failed to add");
    }
  };

  // edit handlers
  const openEdit = (type: "services" | "caseStudies" | "blogPosts", item: any) => {
    setEditingItem({ ...item, __type: type });
    setDrawerOpen(true);
  };

  const saveEdit = async () => {
    if (!editingItem) return;
    try {
      const { __type, id, ...payload } = editingItem;
      await put(__type === "services" ? "services" : __type === "caseStudies" ? "caseStudies" : "blogPosts", id, payload);
      pushToast("success", "Saved");
      setDrawerOpen(false);
      setEditingItem(null);
      await loadAll();
    } catch (err: any) {
      pushToast("error", err?.message || "Failed to save");
    }
  };

  // confirm delete flow
  const confirmDelete = (type: "services" | "caseStudies" | "blogPosts", id?: number) => {
    setConfirmPayload({ type, id });
    setConfirmOpen(true);
  };

  const onConfirmDelete = async () => {
    if (!confirmPayload) return;
    try {
      await del(confirmPayload.type, confirmPayload.id);
      pushToast("success", "Deleted");
      await loadAll();
    } catch (err: any) {
      pushToast("error", err?.message || "Failed to delete");
    } finally {
      setConfirmOpen(false);
      setConfirmPayload(null);
    }
  };

  if (loading) return <div className="min-h-[60vh] flex items-center justify-center">Loading...</div>;

  // choose which list to render and apply search
  const activeList = (activeTab === "services" ? services : activeTab === "cases" ? caseStudies : blogPosts).filter((item: any) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return Object.values(item || {}).join(" ").toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="h-16 md:h-20" />

      {/* Toasts */}
      <div className="fixed right-4 top-20 z-70 flex flex-col gap-2 w-[320px]">
        {toasts.map((t) => (
          <Toast key={t.id} type={t.type} message={t.message} onClose={() => setToasts((s) => s.filter((x) => x.id !== t.id))} />
        ))}
      </div>

      <div className="w-full">
        <div className="flex">
          <aside className={`z-10 h-[calc(100vh-5rem)] sticky top-[5rem] bg-white border-r border-slate-100 ${collapsed ? "w-20" : "w-64"} transition-all`}>
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">A</div>
                  {!collapsed && (
                    <div>
                      <div className="font-semibold">Admin</div>
                      <div className="text-xs text-slate-400">Superuser</div>
                    </div>
                  )}
                </div>

                <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded hover:bg-slate-50">
                  {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </button>
              </div>

              <nav className="flex-1 flex flex-col gap-1">
                <button onClick={() => setActiveTab("services")} className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm w-full text-left ${activeTab === "services" ? "bg-indigo-50 text-indigo-700" : "hover:bg-slate-50 text-slate-700"}`}>
                  <Home size={16} />
                  {!collapsed && <span>Services</span>}
                </button>

                <button onClick={() => setActiveTab("cases")} className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm w-full text-left ${activeTab === "cases" ? "bg-indigo-50 text-indigo-700" : "hover:bg-slate-50 text-slate-700"}`}>
                  <Briefcase size={16} />
                  {!collapsed && <span>Case Studies</span>}
                </button>

                <button onClick={() => setActiveTab("posts")} className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm w-full text-left ${activeTab === "posts" ? "bg-indigo-50 text-indigo-700" : "hover:bg-slate-50 text-slate-700"}`}>
                  <FileText size={16} />
                  {!collapsed && <span>Blog Posts</span>}
                </button>

                <div className="border-t mt-3 pt-3">
                  <button className="flex items-center gap-3 rounded-md px-3 py-2 text-sm w-full hover:bg-slate-50 text-slate-700">
                    <Settings size={16} />
                    {!collapsed && <span>Settings</span>}
                  </button>
                </div>
              </nav>

              <div className="mt-4">
                <button onClick={() => setShowModal(activeTab === "services" ? "service" : activeTab === "cases" ? "case" : "post")} className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white">
                  <Plus size={14} />
                  {!collapsed && <span className="text-sm">Create</span>}
                </button>
              </div>

              <div className="mt-4 text-xs text-slate-400">{!collapsed ? "Shortcuts: quick add, manage content and settings." : "Shortcuts"}</div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-semibold text-slate-900">Admin Dashboard</h1>
                    <p className="text-sm text-slate-500 mt-1">Overview & quick actions</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="hidden sm:grid grid-cols-3 gap-3">
                      <StatCard label="Services" value={services.length} />
                      <StatCard label="Cases" value={caseStudies.length} />
                      <StatCard label="Posts" value={blogPosts.length} />
                    </div>

                    <IconButton onClick={() => setShowModal("service")} title="Add service">
                      <Plus size={14} /> Add
                    </IconButton>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title or excerpt..." className="px-3 py-2 rounded-md border w-full text-sm" />
                        <IconButton onClick={() => setShowModal(activeTab === "services" ? "service" : activeTab === "cases" ? "case" : "post")} title="Create new">
                          <Plus size={14} /> New
                        </IconButton>
                      </div>

                      {/* LIST VIEW */}
                      <div className="mt-6">
                        <div className="rounded-md border overflow-hidden">
                          <ul>
                            {activeList.length === 0 && <li className="p-4 text-sm text-slate-500">No items yet. Click Create to add one.</li>}

                            {activeTab === "services" &&
                              activeList.map((s: Service) => (
                                <li key={s.id} className="flex items-start justify-between gap-4 p-4 hover:bg-slate-50 border-b last:border-b-0">
                                  <div className="flex-1">
                                    <div className="font-medium text-slate-900">{s.title}</div>
                                    <div className="text-sm text-slate-500 mt-1">{s.description}</div>
                                  </div>

                                  <div className="flex items-center gap-3">
                                    <button onClick={() => openEdit("services", s)} className="p-2 rounded hover:bg-slate-100">
                                      <Edit2 size={16} />
                                    </button>
                                    <a href={s.link} target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-slate-100">
                                      <ExternalLink size={16} />
                                    </a>
                                    <button onClick={() => confirmDelete("services", s.id)} className="p-2 rounded text-red-600 hover:bg-red-50">
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                </li>
                              ))}

                            {activeTab === "cases" &&
                              activeList.map((c: CaseStudy) => (
                                <li key={c.id} className="flex items-start justify-between gap-4 p-4 hover:bg-slate-50 border-b last:border-b-0">
                                  <div className="flex-1">
                                    <div className="font-medium text-slate-900">{c.title}</div>
                                    <div className="text-sm text-slate-500 mt-1">{c.client} • {c.category}</div>
                                    <div className="text-sm text-slate-400 mt-1">{c.description}</div>
                                  </div>

                                  <div className="flex items-center gap-3">
                                    <button onClick={() => openEdit("caseStudies", c)} className="p-2 rounded hover:bg-slate-100">
                                      <Edit2 size={16} />
                                    </button>
                                    <a href={c.link} target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-slate-100">
                                      <ExternalLink size={16} />
                                    </a>
                                    <button onClick={() => confirmDelete("caseStudies", c.id)} className="p-2 rounded text-red-600 hover:bg-red-50">
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                </li>
                              ))}

                            {activeTab === "posts" &&
                              activeList.map((b: BlogPost) => (
                                <li key={b.id} className="flex items-start justify-between gap-4 p-4 hover:bg-slate-50 border-b last:border-b-0">
                                  <div className="flex-1">
                                    <div className="font-medium text-slate-900">{b.title}</div>
                                    <div className="text-sm text-slate-500 mt-1">{b.excerpt}</div>
                                    <div className="text-xs text-slate-400 mt-1">By {b.author}</div>
                                  </div>

                                  <div className="flex items-center gap-3">
                                    <button onClick={() => openEdit("blogPosts", b)} className="p-2 rounded hover:bg-slate-100">
                                      <Edit2 size={16} />
                                    </button>
                                    <a href={b.link} target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-slate-100">
                                      <ExternalLink size={16} />
                                    </a>
                                    <button onClick={() => confirmDelete("blogPosts", b.id)} className="p-2 rounded text-red-600 hover:bg-red-50">
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right column: activity / quick actions */}
                    <div className="w-80 hidden lg:block pl-6">
                      {/* <div className="bg-slate-50 p-4 rounded-lg">
                        <div className="text-sm text-slate-600 font-medium mb-2">Recent Activity</div>
                        <div className="text-xs text-slate-500">No recent activity</div>
                      </div> */}

                      <div className="mt-4">
                        <div className="text-sm font-medium">Quick Actions</div>
                        <div className="mt-2 flex flex-col gap-2">
                          <button onClick={() => setShowModal("service")} className="px-3 py-2 rounded-md bg-white border text-sm hover:bg-slate-50">Add Service</button>
                          <button onClick={() => setShowModal("case")} className="px-3 py-2 rounded-md bg-white border text-sm hover:bg-slate-50">Add Case</button>
                          <button onClick={() => setShowModal("post")} className="px-3 py-2 rounded-md bg-white border text-sm hover:bg-slate-50">Add Post</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-6">
                <Footer />
              </div> */}
            </div>
          </main>
        </div>
      </div>

      {/* Drawer for edit */}
      <Drawer open={drawerOpen} title={editingItem ? `Edit ${editingItem.title ?? "item"}` : "Edit"} onClose={() => { setDrawerOpen(false); setEditingItem(null); }}>
        {editingItem ? (
          <div className="space-y-4">
            {editingItem.__type === "services" && (
              <>
                <label className="block text-sm font-medium text-slate-700">Title</label>
                <input value={editingItem.title} onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
                <label className="block text-sm font-medium text-slate-700">Description</label>
                <textarea value={editingItem.description} onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2 h-28" />
              </>
            )}

            {editingItem.__type === "caseStudies" && (
              <>
                <label className="block text-sm font-medium text-slate-700">Title</label>
                <input value={editingItem.title} onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Client</label>
                    <input value={editingItem.client} onChange={(e) => setEditingItem({ ...editingItem, client: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Category</label>
                    <input value={editingItem.category} onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
                  </div>
                </div>
                <label className="block text-sm font-medium text-slate-700">Description</label>
                <textarea value={editingItem.description} onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2 h-28" />
              </>
            )}

            {editingItem.__type === "blogPosts" && (
              <>
                <label className="block text-sm font-medium text-slate-700">Title</label>
                <input value={editingItem.title} onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
                <label className="block text-sm font-medium text-slate-700">Excerpt</label>
                <input value={editingItem.excerpt} onChange={(e) => setEditingItem({ ...editingItem, excerpt: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
                <label className="block text-sm font-medium text-slate-700">Content</label>
                <textarea value={editingItem.content} onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2 h-36" />
                <label className="block text-sm font-medium text-slate-700">Author</label>
                <input value={editingItem.author} onChange={(e) => setEditingItem({ ...editingItem, author: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
              </>
            )}

            <div className="flex items-center justify-end gap-2">
              <button onClick={() => { setDrawerOpen(false); setEditingItem(null); }} className="px-4 py-2 rounded-md">Cancel</button>
              <button onClick={saveEdit} className="px-4 py-2 rounded-md bg-indigo-600 text-white inline-flex items-center gap-2"><CheckCircle size={14} />Save</button>
            </div>
          </div>
        ) : (
          <div>Nothing to edit</div>
        )}
      </Drawer>

      {/* Confirm modal */}
      <ConfirmModal open={confirmOpen} title="Delete item?" description="This action cannot be undone." onConfirm={onConfirmDelete} onCancel={() => setConfirmOpen(false)} />

      {/* Add modal (create new) */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold capitalize">Add {showModal}</h3>
              <button onClick={() => setShowModal(null)} className="p-2 rounded hover:bg-slate-100">
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              {showModal === "service" && (
                <form onSubmit={addService} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Title</label>
                    <input required value={newService.title} onChange={(e) => setNewService({ ...newService, title: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Short Description</label>
                    <textarea required value={newService.description} onChange={(e) => setNewService({ ...newService, description: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2 h-20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Detailed Description</label>
                    <textarea value={newService.longDescription} onChange={(e) => setNewService({ ...newService, longDescription: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2 h-32" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Features (comma separated)</label>
                    <input value={newService.features?.join(", ")} onChange={(e) => setNewService({ ...newService, features: e.target.value.split(",").map(s => s.trim()) })} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Feature 1, Feature 2, Feature 3" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Benefits (comma separated)</label>
                    <input value={newService.benefits?.join(", ")} onChange={(e) => setNewService({ ...newService, benefits: e.target.value.split(",").map(s => s.trim()) })} className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Benefit 1, Benefit 2, Benefit 3" />
                  </div>

                  <div className="flex items-center gap-2 justify-end">
                    <button type="button" onClick={() => setShowModal(null)} className="px-4 py-2 rounded-md">Cancel</button>
                    <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white inline-flex items-center gap-2"> <Plus size={14} /> Add Service</button>
                  </div>
                </form>
              )}

              {showModal === "case" && (
                <form onSubmit={addCase} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Title</label>
                    <input required value={newCase.title} onChange={(e) => setNewCase({ ...newCase, title: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Client</label>
                      <input value={newCase.client} onChange={(e) => setNewCase({ ...newCase, client: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Category</label>
                      <input value={newCase.category} onChange={(e) => setNewCase({ ...newCase, category: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">Description</label>
                    <textarea value={newCase.description} onChange={(e) => setNewCase({ ...newCase, description: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2 h-28" />
                  </div>

                  <div className="flex items-center gap-2 justify-end">
                    <button type="button" onClick={() => setShowModal(null)} className="px-4 py-2 rounded-md">Cancel</button>
                    <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white inline-flex items-center gap-2"> <Plus size={14} /> Add Case</button>
                  </div>
                </form>
              )}

              {showModal === "post" && (
                <form onSubmit={addPost} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Title</label>
                    <input required value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Excerpt</label>
                    <input value={newPost.excerpt} onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Content</label>
                    <textarea value={newPost.content} onChange={(e) => setNewPost({ ...newPost, content: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2 h-36" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Author</label>
                    <input value={newPost.author} onChange={(e) => setNewPost({ ...newPost, author: e.target.value })} className="mt-1 w-full rounded-md border px-3 py-2" />
                  </div>

                  <div className="flex items-center gap-2 justify-end">
                    <button type="button" onClick={() => setShowModal(null)} className="px-4 py-2 rounded-md">Cancel</button>
                    <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white inline-flex items-center gap-2"> <Plus size={14} /> Add Post</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
