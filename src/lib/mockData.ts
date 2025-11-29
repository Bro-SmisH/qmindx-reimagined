// Mock API data for homepage components
// Runtime API base for JSON Server / backend
const API_BASE = import.meta.env?.VITE_API_BASE_URL ?? "http://localhost:3000";

async function fetchWithFallback<T>(path: string, fallback: T, delayMs = 300): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}/${path}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${path}: ${res.status} ${res.statusText}`);
    }
    return (await res.json()) as T;
  } catch (error) {
    console.error(`[mockData] Falling back to static data for ${path}`, error);
    if (delayMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
    return fallback;
  }
}

export const mockServices = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "Build scalable, secure, and high-performance software solutions tailored to your business needs.",
    longDescription: "In today's fast-paced digital landscape, off-the-shelf software often falls short of meeting unique business requirements. Our Custom Software Development service is designed to bridge that gap. We don't just write code; we engineer solutions that align perfectly with your strategic goals. From complex enterprise resource planning (ERP) systems to streamlined customer relationship management (CRM) tools, we build software that grows with you. Our approach involves deep collaboration, ensuring that every feature serves a purpose and every interface is intuitive. We prioritize scalability, security, and performance, ensuring your software remains a competitive advantage for years to come.",
    icon: "💻",
    features: [
      "Full-cycle development from ideation to deployment",
      "Microservices architecture for scalability",
      "Cloud-native application development",
      "Legacy system modernization and migration",
      "API design, development, and integration",
      " rigorous Quality Assurance (QA) and testing"
    ],
    benefits: [
      "Tailored specifically to your unique workflows",
      "Complete ownership of the source code",
      "Enhanced security and compliance adherence",
      "Seamless integration with existing systems",
      "Scalability to handle growing user bases"
    ],
    process: [
      "Discovery & Requirement Analysis",
      "System Architecture & Design",
      "Agile Development & Iteration",
      "Comprehensive Testing & QA",
      "Deployment & CI/CD Setup",
      "Ongoing Maintenance & Support"
    ],
    technologies: ["React", "Node.js", "Python", "Java", "Docker", "Kubernetes", "AWS", "Azure"],
    faqs: [
      { question: "How long does a custom project take?", answer: "Timeline varies by complexity, but typically ranges from 3 to 9 months." },
      { question: "Do I own the code?", answer: "Yes, you have full ownership of the source code and intellectual property." }
    ],
    link: "/services/web-development"
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    description: "Leverage cutting-edge AI and ML technologies to automate processes and gain insights.",
    longDescription: "Artificial Intelligence is no longer a futuristic concept; it's a present-day necessity for staying competitive. Our AI & Machine Learning services empower your business to harness the power of data. We build intelligent systems that can predict trends, automate routine tasks, and provide deep insights into customer behavior. Whether you need a recommendation engine, a natural language processing chatbot, or a computer vision system for quality control, our team of data scientists and AI engineers has the expertise to deliver. We focus on ethical AI and explainable models, ensuring you understand and trust the decisions your AI makes.",
    icon: "🤖",
    features: [
      "Predictive analytics and forecasting models",
      "Natural Language Processing (NLP) solutions",
      "Computer Vision for image and video analysis",
      "Recommendation engines and personalization",
      "Robotic Process Automation (RPA)",
      "Generative AI integration (LLMs)"
    ],
    benefits: [
      "Automate repetitive and manual tasks",
      "Gain data-driven insights for better decision making",
      "Enhance customer experiences with personalization",
      "Reduce operational costs and errors",
      "Identify new revenue opportunities"
    ],
    process: [
      "Data Assessment & Strategy",
      "Data Collection & Cleaning",
      "Model Selection & Training",
      "Validation & Tuning",
      "Integration & Deployment",
      "Monitoring & Retraining"
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Scikit-learn", "Pandas", "Python"],
    faqs: [
      { question: "What data do I need?", answer: "We can help you assess your current data availability and quality during the discovery phase." },
      { question: "Is AI expensive?", answer: "We offer scalable solutions, starting from POCs to full enterprise deployments." }
    ],
    link: "/services/ai-solutions"
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Migrate to the cloud and optimize your infrastructure for scalability and performance.",
    longDescription: "The cloud is the backbone of modern digital infrastructure. Our Cloud Solutions service helps you navigate the complexities of cloud computing. Whether you are looking to migrate from on-premises servers, optimize your existing cloud spend, or build a serverless application from scratch, we have the expertise. We are partners with major cloud providers like AWS, Azure, and Google Cloud. We focus on security, reliability, and cost-efficiency, ensuring your infrastructure is robust enough to handle peak loads while being optimized to avoid unnecessary costs.",
    icon: "☁️",
    features: [
      "Cloud migration strategy and execution",
      "Serverless architecture implementation",
      "DevOps and CI/CD pipeline automation",
      "Infrastructure as Code (IaC)",
      "Cloud security and compliance audits",
      "Performance optimization and cost management"
    ],
    benefits: [
      "Global scalability on demand",
      "Reduced IT infrastructure costs",
      "High availability and disaster recovery",
      "Faster time-to-market for new features",
      "Enhanced security posture"
    ],
    process: [
      "Infrastructure Assessment",
      "Migration Planning",
      "Cloud Architecture Design",
      "Implementation & Migration",
      "Security Hardening",
      "Optimization & Management"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Ansible", "Jenkins", "GitLab CI"],
    faqs: [
      { question: "Which cloud provider is best?", answer: "It depends on your specific needs. We are cloud-agnostic and will recommend the best fit." },
      { question: "Is my data secure?", answer: "Security is our top priority. We implement industry-standard security best practices." }
    ],
    link: "/services/cloud-services"
  },
  {
    id: 4,
    title: "Mobile Development",
    description: "Create intuitive and powerful mobile applications for iOS and Android platforms.",
    longDescription: "In a mobile-first world, having a high-quality mobile app is essential for engaging with your customers. Our Mobile Development service covers the entire spectrum of mobile app creation. We specialize in building native apps for iOS and Android, as well as cross-platform solutions using React Native and Flutter. We prioritize User Experience (UX) design, ensuring your app is not only functional but also a delight to use. From secure payment integration to real-time push notifications, we build feature-rich apps that drive user retention and business growth.",
    icon: "📱",
    features: [
      "Native iOS (Swift) and Android (Kotlin) development",
      "Cross-platform development (React Native, Flutter)",
      "UI/UX design for mobile",
      "App Store and Play Store submission",
      "Mobile backend development",
      "Maintenance and updates"
    ],
    benefits: [
      "Direct channel to your customers",
      "Increased brand loyalty and engagement",
      "Access to device features (camera, GPS)",
      "Offline functionality",
      "Push notifications for re-engagement"
    ],
    process: [
      "Concept & Strategy",
      "UI/UX Design & Prototyping",
      "Development (Frontend & Backend)",
      "QA & Testing",
      "App Store Launch",
      "Post-Launch Support"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "SQLite"],
    faqs: [
      { question: "Native or Cross-platform?", answer: "We help you decide based on your budget, timeline, and performance requirements." },
      { question: "How do you handle updates?", answer: "We provide ongoing maintenance packages to handle OS updates and new features." }
    ],
    link: "/services/mobile-development"
  },
  {
    id: 5,
    title: "Blockchain & Web3",
    description: "Build decentralized applications and integrate blockchain technology into your business.",
    longDescription: "Blockchain technology is redefining trust and transparency in the digital age. Our Blockchain & Web3 services help you stay ahead of the curve. We build secure Decentralized Applications (DApps), Smart Contracts, and private blockchain networks. Whether you are exploring DeFi (Decentralized Finance), NFTs (Non-Fungible Tokens), or supply chain transparency, our experts can guide you. We understand the nuances of various blockchain protocols and ensure your solution is secure, gas-efficient, and scalable.",
    icon: "⛓️",
    features: [
      "Smart Contract development and auditing",
      "Decentralized Application (DApp) development",
      "Private and consortium blockchain setup",
      "NFT marketplace development",
      "Tokenomics design and implementation",
      "Wallet integration"
    ],
    benefits: [
      "Immutable and transparent records",
      "Enhanced security through cryptography",
      "Elimination of intermediaries",
      "Traceability and provenance",
      "New business models (Tokenization)"
    ],
    process: [
      "Use Case Analysis",
      "Platform Selection",
      "Architecture Design",
      "Smart Contract Dev",
      "Security Audit",
      "Deployment & Mainnet Launch"
    ],
    technologies: ["Solidity", "Ethereum", "Polygon", "Web3.js", "Hardhat", "IPFS"],
    faqs: [
      { question: "Is blockchain right for me?", answer: "We conduct a feasibility study to ensure blockchain adds real value to your use case." },
      { question: "What about gas fees?", answer: "We optimize smart contracts and choose the right networks to minimize transaction costs." }
    ],
    link: "/services/blockchain-web3"
  },
  {
    id: 6,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics and visualization.",
    longDescription: "Data is the new oil, but it's useless if you can't refine it. Our Data Analytics service helps you turn raw data into strategic assets. We assist in setting up data warehouses, creating ETL pipelines, and building interactive dashboards. We help you understand your past performance, monitor real-time operations, and predict future trends. By democratizing data access within your organization, we empower every team member to make informed, data-backed decisions.",
    icon: "📊",
    features: [
      "Data Warehousing and Data Lakes",
      "ETL/ELT Pipeline development",
      "Business Intelligence (BI) dashboards",
      "Real-time data streaming and analytics",
      "Data governance and quality management",
      "Big Data processing"
    ],
    benefits: [
      "Single source of truth for your data",
      "Faster and more accurate reporting",
      "Identification of inefficiencies",
      "Better understanding of customer behavior",
      "Strategic decision support"
    ],
    process: [
      "Data Audit",
      "Infrastructure Setup",
      "Pipeline Engineering",
      "Dashboard Creation",
      "Analysis & Insights",
      "Training & Handover"
    ],
    technologies: ["Snowflake", "BigQuery", "Tableau", "PowerBI", "Apache Spark", "Kafka"],
    faqs: [
      { question: "Can you handle big data?", answer: "Yes, our solutions are designed to scale with your data volume, from gigabytes to petabytes." },
      { question: "What about data privacy?", answer: "We strictly adhere to GDPR, CCPA, and other data privacy regulations." }
    ],
    link: "/services/data-analytics"
  }
];

export const mockCaseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Modernization",
    client: "RetailCorp",
    category: "E-commerce",
    description: "Completely redesigned and modernized the e-commerce platform, resulting in 150% increase in conversion rates and 60% improvement in page load times.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    results: "150% increase in conversions, 60% faster load times",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    link: "/case-studies/ecommerce-modernization"
  },
  {
    id: 2,
    title: "AI-Powered Healthcare Analytics",
    client: "MediTech Solutions",
    category: "Healthcare",
    description: "Developed an AI-powered analytics platform that processes medical data to provide predictive insights for patient care and operational efficiency.",
    technologies: ["Python", "TensorFlow", "React", "MongoDB"],
    results: "40% improvement in diagnostic accuracy, 30% reduction in costs",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    link: "/case-studies/healthcare-ai-analytics"
  },
  {
    id: 3,
    title: "FinTech Mobile Banking App",
    client: "NeoBank",
    category: "FinTech",
    description: "Built a secure and user-friendly mobile banking application with real-time transaction processing and advanced security features.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis"],
    results: "1M+ downloads, 4.8★ app store rating",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    link: "/case-studies/fintech-mobile-app"
  },
  {
    id: 4,
    title: "Supply Chain Optimization",
    client: "LogiCorp",
    category: "Logistics",
    description: "Implemented an IoT-enabled supply chain management system with real-time tracking and predictive analytics.",
    technologies: ["IoT", "Python", "React", "InfluxDB"],
    results: "25% reduction in delivery times, 35% cost savings",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    link: "/case-studies/supply-chain-optimization"
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Inc.",
    rating: 5,
    content: "QMindX delivered an exceptional solution that exceeded our expectations. Their team's expertise and dedication to quality are unmatched in the industry.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "VP of Engineering",
    company: "InnovateLabs",
    rating: 5,
    content: "Working with QMindX was a game-changer for our project. They brought innovative ideas and executed them flawlessly. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "StartupHub",
    rating: 5,
    content: "The QMindX team transformed our vision into reality. Their attention to detail and commitment to delivering on time was impressive.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Kim",
    role: "CEO",
    company: "DigitalFirst",
    rating: 5,
    content: "Outstanding service and exceptional results. QMindX helped us scale our platform and improve performance significantly.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Director of Operations",
    company: "Enterprise Solutions",
    rating: 5,
    content: "Professional, reliable, and innovative. QMindX delivered a complex solution that has become the backbone of our operations.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Head of Technology",
    company: "FutureTech",
    rating: 5,
    content: "The expertise and professionalism of the QMindX team is exceptional. They delivered beyond our wildest expectations.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

export const mockBlogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Software Development",
    excerpt: "Explore how artificial intelligence is revolutionizing enterprise software development, from automated coding to intelligent testing.",
    author: "Dr. Alex Martinez",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & ML",
    tags: ["AI", "Enterprise", "Development"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    link: "/blog/ai-enterprise"
  },
  {
    id: 2,
    title: "Cloud Infrastructure Best Practices for 2024",
    excerpt: "Learn the latest cloud infrastructure best practices that will help you build scalable, secure, and cost-effective applications.",
    author: "Sarah Williams",
    date: "2024-01-12",
    readTime: "10 min read",
    category: "Cloud Computing",
    tags: ["Cloud", "Infrastructure", "DevOps"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    link: "/blog/cloud-infrastructure"
  },
  {
    id: 3,
    title: "Complete Guide to Web3 Development",
    excerpt: "A comprehensive guide to getting started with Web3 development, including blockchain basics, smart contracts, and DApps.",
    author: "Marcus Johnson",
    date: "2024-01-10",
    readTime: "15 min read",
    category: "Blockchain",
    tags: ["Web3", "Blockchain", "Smart Contracts"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    link: "/blog/web3-development"
  },
  {
    id: 4,
    title: "Mobile App Development Trends to Watch",
    excerpt: "Discover the latest trends in mobile app development, from cross-platform frameworks to emerging technologies.",
    author: "Jennifer Liu",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Mobile Development",
    tags: ["Mobile", "iOS", "Android"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    link: "/blog/mobile-trends"
  }
];

// API functions to simulate fetching data
export const fetchServices = async () => {
  return fetchWithFallback("services", mockServices, 500);
};


export const fetchCaseStudies = async () => {
  return fetchWithFallback("caseStudies", mockCaseStudies, 600);
};


export const fetchTestimonials = async () => {
  return fetchWithFallback("testimonials", mockTestimonials, 400);
};


export const fetchBlogPosts = async () => {
  return fetchWithFallback("blogPosts", mockBlogPosts, 300);
};

export const fetchServiceBySlug = async (slug: string) => {
  const services = await fetchServices();
  return services.find((s: any) => {
    const sSlug = s.slug || s.link?.split("/").pop() || "";
    return sSlug === slug;
  });
};

export const fetchBlogPostBySlug = async (slug: string) => {
  const posts = await fetchBlogPosts();
  return posts.find((p: any) => {
    const pSlug = p.slug || p.link?.split("/").pop() || "";
    return pSlug === slug;
  });
};

export const mockStaffing = [
  {
    id: 1,
    title: "Hire Android Developer",
    description: "Expert Android developers to build robust and scalable mobile applications.",
    icon: "📱",
    features: ["Kotlin & Java expertise", "UI/UX implementation", "Performance optimization"],
    link: "/staffing/hire-android-developer"
  },
  {
    id: 2,
    title: "Hire DevOps Developer",
    description: "Streamline your development process with our experienced DevOps engineers.",
    icon: "⚙️",
    features: ["CI/CD pipelines", "Cloud infrastructure", "Automation"],
    link: "/staffing/hire-devops-developer"
  },
  {
    id: 3,
    title: "Hire iOS Developer",
    description: "Build premium iOS applications with our skilled Swift and Objective-C developers.",
    icon: "🍎",
    features: ["Swift & SwiftUI", "App Store guidelines", "Native performance"],
    link: "/staffing/hire-ios-developer"
  },
  {
    id: 4,
    title: "Hire PHP Developer",
    description: "Experienced PHP developers for dynamic web applications and CMS solutions.",
    icon: "🐘",
    features: ["Laravel & Symfony", "WordPress development", "API integration"],
    link: "/staffing/hire-php-developer"
  },
  {
    id: 5,
    title: "Hire Magento Developers",
    description: "Certified Magento developers to build powerful e-commerce stores.",
    icon: "🛒",
    features: ["Magento 2", "Custom themes", "Extension development"],
    link: "/staffing/hire-magento-developers"
  },
  {
    id: 6,
    title: "Hire NodeJS Developers",
    description: "Scalable backend solutions with our expert Node.js developers.",
    icon: "🟢",
    features: ["Express & NestJS", "Real-time applications", "Microservices"],
    link: "/staffing/hire-nodejs-developers"
  },
  {
    id: 7,
    title: "Hire ReactJS Developers",
    description: "Build interactive UIs with our skilled React.js developers.",
    icon: "⚛️",
    features: ["Redux & Context API", "Next.js", "Component libraries"],
    link: "/staffing/hire-reactjs-developers"
  },
  {
    id: 8,
    title: "Hire Apple Watch Developers",
    description: "Create innovative apps for the Apple Watch ecosystem.",
    icon: "⌚",
    features: ["WatchKit", "HealthKit integration", "Wearable UX"],
    link: "/staffing/hire-apple-watch-developers"
  },
  {
    id: 9,
    title: "Hire WordPress Developer",
    description: "Custom WordPress solutions tailored to your business needs.",
    icon: "📝",
    features: ["Custom themes", "Plugin development", "Performance tuning"],
    link: "/staffing/hire-wordpress-developer"
  },
  {
    id: 10,
    title: "Hire React Native Developer",
    description: "Cross-platform mobile apps with native performance using React Native.",
    icon: "📱",
    features: ["iOS & Android", "Code sharing", "Native modules"],
    link: "/staffing/hire-react-native-developer"
  }
];

export const fetchStaffing = async () => {
  return fetchWithFallback("staffing", mockStaffing, 400);
};

export const fetchStaffingBySlug = async (slug: string) => {
  const staffing = await fetchStaffing();
  return staffing.find((s: any) => {
    const sSlug = s.slug || s.link?.split("/").pop() || "";
    return sSlug === slug;
  });
};
