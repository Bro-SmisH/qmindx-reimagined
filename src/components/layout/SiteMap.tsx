import { Link } from "react-router-dom";

const SiteMap = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/services/ai-solutions", label: "AI Solutions" },
    { href: "/services/mobile-development", label: "Mobile Development" },
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/cloud-services", label: "Cloud Services" },
    { href: "/services/data-analytics", label: "Data Analytics" },
    { href: "/services/blockchain-web3", label: "Blockchain & Web3" },
    { href: "/blog", label: "Blog" },
    { href: "/blog/ai-enterprise", label: "AI in Enterprise" },
    { href: "/blog/cloud-infrastructure", label: "Cloud Infrastructure" },
    { href: "/blog/web3-development", label: "Web3 Guide" },
    { href: "/blog/mobile-trends", label: "Mobile Trends" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Sitemap</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link to={l.href} className="text-accent hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SiteMap;
