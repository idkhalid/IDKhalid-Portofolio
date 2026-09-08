import type { Locale } from "@/i18n/types";

const isProductionEnvironment = process.env.APP_ENV === "production";
const configuredSiteUrl = process.env.SITE_URL;

function normalizeSiteUrl(value: string): string {
  const url = new URL(value);
  if (isProductionEnvironment && url.protocol !== "https:") {
    throw new Error("SITE_URL must use HTTPS in production.");
  }
  url.search = "";
  url.hash = "";
  url.pathname = url.pathname.replace(/\/+$/, "");
  return url.toString().replace(/\/$/, "");
}

if (isProductionEnvironment && typeof window === "undefined" && !configuredSiteUrl) {
  throw new Error("SITE_URL is required when APP_ENV=production.");
}

const resolvedSiteUrl = normalizeSiteUrl(
  configuredSiteUrl || "http://localhost:3000"
);

interface BilingualString {
  en: string;
  id: string;
}

interface BilingualArray {
  en: string[];
  id: string[];
}

export interface TechCategory {
  category: string;
  technologies: string[];
  description: string;
}

export interface BilingualTechCategory {
  en: TechCategory[];
  id: TechCategory[];
}

export interface ExperienceItem {
  role: string;
  duration: string;
  description: string[];
}

export interface BilingualExperienceItem {
  en: ExperienceItem[];
  id: ExperienceItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface BilingualServiceItem {
  en: ServiceItem[];
  id: ServiceItem[];
}

export interface PrincipleItem {
  title: string;
  description: string;
}

export interface BilingualPrincipleItem {
  en: PrincipleItem[];
  id: PrincipleItem[];
}

export const siteConfig = {
  name: "Idham Khalid",
  initials: "IK",
  role: "Independent Developer",
  url: resolvedSiteUrl,
  location: "Bekasi, Indonesia",
  timezone: "UTC+7",
  year: 2026,

  subheadline: {
    en: "Independent developer working across product interfaces, automation, backend systems, and infrastructure.",
    id: "Developer independen yang bekerja di product interfaces, automasi, backend systems, dan infrastructure.",
  } as BilingualString,

  currentStatus: {
    en: "Available for selected projects",
    id: "Tersedia untuk project terpilih",
  } as BilingualString,

  stack: ["Python", "Go", "Laravel", "Next.js", "Linux", "Cloudflare"],

  about: {
    short: {
      en: "I build web products, automation systems, and infrastructure used for real work. The focus is simple: understand the constraint, make the system work, then clean it up until it's operable.",
      id: "Saya membangun produk web, sistem automasi, dan infrastructure yang dipakai untuk kerja nyata. Fokusnya sederhana: memahami constraint, membuat sistem berjalan, lalu membereskannya sampai layak dioperasikan.",
    } as BilingualString,
    secondary: {
      en: "Based in Bekasi. Comfortable moving between browser workflows, application code, and Linux servers.",
      id: "Berbasis di Bekasi. Terbiasa berpindah antara browser workflows, application code, dan Linux servers.",
    } as BilingualString,
    extended: {
      en: "Independent developer working across product interfaces, automation, backend systems, and infrastructure.\n\nI usually work where a process is still manual, fragile, or spread across too many tools. The job is to understand the constraint, build the smallest reliable system, and make it operable after launch.",
      id: "Developer independen yang bekerja di product interfaces, automasi, backend systems, dan infrastructure.\n\nSaya biasa bekerja di area yang prosesnya masih manual, rapuh, atau tersebar di terlalu banyak tools. Tugasnya adalah memahami constraint, membangun sistem terkecil yang reliable, dan membuatnya bisa dioperasikan setelah launch.",
    } as BilingualString,
  },

  howIWork: {
    en: [
      "Understand the real workflow and failure points.",
      "Build a small test before scaling the system.",
      "Measure actual behavior instead of assuming capacity.",
      "Document enough that the system can be operated later.",
    ],
    id: [
      "Pahami workflow nyata dan titik kegagalannya.",
      "Bangun tes kecil sebelum memperbesar sistem.",
      "Ukur perilaku aktual, bukan mengasumsikan kapasitas.",
      "Dokumentasikan secukupnya agar sistem bisa dioperasikan nanti.",
    ],
  } as BilingualArray,

  techStackIntro: {
    en: "Technologies used are chosen based on system requirements—from building interfaces and backends, automating workflows, to operating and securing production infrastructure.",
    id: "Teknologi yang digunakan dipilih berdasarkan kebutuhan sistem—mulai dari membangun interface dan backend, mengotomatisasi workflow, sampai menjalankan dan mengamankan infrastructure production.",
  } as BilingualString,

  techStack: {
    en: [
      { category: "Backend & Application Engineering", technologies: ["Go", "Python", "PHP", "Laravel", "CodeIgniter 4", "REST API", "HMAC"], description: "Used to build application backends, operational dashboards, hosting-control API integrations, service workers, and network/protocol tooling." },
      { category: "Automation & Worker Systems", technologies: ["Playwright", "Selenium", "Telethon", "Python", "Go"], description: "Used for browser automation, multi-account workers, isolated session management, scheduled services, Telegram automation, and manual workflow replacement." },
      { category: "Infrastructure & Service Operations", technologies: ["Ubuntu", "Linux", "systemd", "Docker", "Nginx", "PHP-FPM"], description: "Used for deployment, service isolation, persistent process management, resource tuning, graceful restarts, and operating multiple services on VPS." },
      { category: "Cloud & Origin Security", technologies: ["Cloudflare", "iptables", "netfilter-persistent", "Cloudflare Tunnel"], description: "Used for origin locking, traffic filtering, rate limiting, reverse proxy, secure tunneling, and restricting direct web server access." },
      { category: "Frontend & Interface Development", technologies: ["JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Bootstrap", "Alpine.js", "jQuery", "DataTables"], description: "Used for landing pages, responsive dashboards, internal tools, mobile-friendly data tables, and operational interfaces that remain lightweight." },
      { category: "Admin & Internal Tools", technologies: ["Filament", "Laravel", "DataTables", "Hestia API"], description: "Used to build admin panels, user/domain inventories, account provisioning, and internal workflows with large operational data requirements." },
      { category: "Database & Application Data", technologies: ["MySQL", "MariaDB"], description: "Used for application data, inventory, account management, transactions, and database tuning in production environments." },
      { category: "HTTP & Protocol Engineering", technologies: ["HTTP/1.1", "HTTP/2", "HTTP/3", "QUIC", "TLS"], description: "Used in protocol resilience experiments, protocol auto-detection, concurrent request workers, observability, and infrastructure testing." },
      { category: "Development & Delivery", technologies: ["Git", "GitHub", "VS Code", "Linux CLI"], description: "Used for version control, source management, deployment workflows, troubleshooting, and cross-environment project maintenance." }
    ],
    id: [
      { category: "Backend & Application Engineering", technologies: ["Go", "Python", "PHP", "Laravel", "CodeIgniter 4", "REST API", "HMAC"], description: "Digunakan untuk membangun backend aplikasi, dashboard operasional, integrasi hosting-control API, service worker, serta tooling berbasis jaringan dan protokol." },
      { category: "Automation & Worker Systems", technologies: ["Playwright", "Selenium", "Telethon", "Python", "Go"], description: "Digunakan untuk browser automation, multi-account worker, isolated session management, scheduled services, Telegram automation, dan workflow yang sebelumnya masih dikerjakan manual." },
      { category: "Infrastructure & Service Operations", technologies: ["Ubuntu", "Linux", "systemd", "Docker", "Nginx", "PHP-FPM"], description: "Digunakan untuk deployment, service isolation, persistent process management, resource tuning, graceful restart, dan operasional multiple services pada VPS." },
      { category: "Cloud & Origin Security", technologies: ["Cloudflare", "iptables", "netfilter-persistent", "Cloudflare Tunnel"], description: "Digunakan untuk origin locking, traffic filtering, rate limiting, reverse proxy, secure tunneling, dan membatasi akses langsung ke web server." },
      { category: "Frontend & Interface Development", technologies: ["JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Bootstrap", "Alpine.js", "jQuery", "DataTables"], description: "Digunakan untuk landing page, responsive dashboard, internal tools, mobile-friendly data tables, dan interface operasional yang tetap ringan serta mudah digunakan." },
      { category: "Admin & Internal Tools", technologies: ["Filament", "Laravel", "DataTables", "Hestia API"], description: "Digunakan untuk membangun panel administrasi, user/domain inventory, account provisioning, dan workflow internal dengan kebutuhan data operasional yang besar." },
      { category: "Database & Application Data", technologies: ["MySQL", "MariaDB"], description: "Digunakan untuk application data, inventory, account management, transaksi, serta konfigurasi dan tuning database pada environment production." },
      { category: "HTTP & Protocol Engineering", technologies: ["HTTP/1.1", "HTTP/2", "HTTP/3", "QUIC", "TLS"], description: "Digunakan dalam eksperimen protocol resilience, protocol auto-detection, concurrent request workers, observability, dan pengujian infrastructure pada controlled environment." },
      { category: "Development & Delivery", technologies: ["Git", "GitHub", "VS Code", "Linux CLI"], description: "Digunakan untuk version control, source management, deployment workflow, troubleshooting, dan maintenance project lintas environment." }
    ]
  } as BilingualTechCategory,

  experience: {
    en: [
      {
        role: "Founder & Infrastructure Operator — IDKCLOUD",
        duration: "2023 - Present",
        description: [
          "Provide and manage VPS and Windows remote environments for client needs.",
          "Perform manual provisioning from raw VPS to ready-to-use environments: OS installation, Remote Desktop configuration, firewall, networking, user access, and security baseline.",
          "Validate remote connectivity, troubleshoot access issues, and handle server maintenance and handover."
        ]
      },
      {
        role: "Freelance Developer — Independent / Project-Based",
        duration: "2017 - Present",
        description: [
          "Build web applications, operational dashboards, API integrations, and internal tools using Go, Python, PHP/Laravel, and JavaScript/TypeScript.",
          "Develop browser automation and worker systems with isolated sessions, concurrent execution, and persistent service management.",
          "Handle deployment and operations of Ubuntu-based VPS, systemd, Nginx, Cloudflare, and iptables."
        ]
      },
      {
        role: "Backend Developer (Payment Gateway) — Priv8Tools",
        duration: "2019 - 2021",
        description: [
          "Developed backend transaction flows for credit top-up and payment processing systems.",
          "Integrated DANA, OVO, and Stripe payment methods into the application backend.",
          "Automated payment verification and credit balance updates that were previously done manually.",
          "Managed pending, successful, failed, and expired statuses to maintain top-up process consistency."
        ]
      },
      {
        role: "Server Operations Intern — Istana Boneka Wisuda",
        duration: "2017 - 2018",
        description: [
          "Assisted with server management, maintenance, and basic troubleshooting to support the company's operational needs."
        ]
      }
    ],
    id: [
      {
        role: "Founder & Infrastructure Operator — IDKCLOUD",
        duration: "2023 - Present",
        description: [
          "Menyediakan dan mengelola layanan VPS serta Windows remote environments untuk kebutuhan pelanggan.",
          "Melakukan provisioning manual dari raw VPS hingga siap digunakan: instalasi OS, konfigurasi Remote Desktop, firewall, networking, user access, dan security baseline.",
          "Memvalidasi konektivitas remote, melakukan troubleshooting akses, serta menangani maintenance dan handover server."
        ]
      },
      {
        role: "Freelance Developer — Independent / Project-Based",
        duration: "2017 - Present",
        description: [
          "Membangun web application, operational dashboard, API integration, dan internal tools menggunakan Go, Python, PHP/Laravel, serta JavaScript/TypeScript.",
          "Mengembangkan browser automation dan worker systems dengan isolated sessions, concurrent execution, serta persistent service management.",
          "Menangani deployment dan operasional VPS berbasis Ubuntu, systemd, Nginx, Cloudflare, dan iptables."
        ]
      },
      {
        role: "Backend Developer (Payment Gateway) — Priv8Tools",
        duration: "2019 - 2021",
        description: [
          "Mengembangkan backend transaction flow untuk sistem top-up credit dan payment processing.",
          "Mengintegrasikan metode pembayaran DANA, OVO, dan Stripe ke dalam backend aplikasi.",
          "Mengotomatisasi payment verification dan credit balance update yang sebelumnya dilakukan secara manual.",
          "Menangani status pending, successful, failed, dan expired untuk menjaga konsistensi proses top-up."
        ]
      },
      {
        role: "Server Operations Intern — Istana Boneka Wisuda",
        duration: "2017 - 2018",
        description: [
          "Membantu pengelolaan, pemeliharaan, dan troubleshooting dasar server untuk mendukung kebutuhan operasional perusahaan."
        ]
      }
    ]
  } as BilingualExperienceItem,

  services: {
    en: [
      { title: "Web Development", description: "End-to-end system development including high-conversion landing pages, admin dashboards, and custom internal tools." },
      { title: "Automation", description: "Automating repetitive browser workflows, developing account workers, and replacing manual processes for operational efficiency." },
      { title: "Server Operations", description: "Linux server configuration, deployment management, Cloudflare origin protection, and performance tuning." }
    ],
    id: [
      { title: "Web Development", description: "Pembuatan sistem end-to-end seperti dashboard admin, internal tools, dan landing page berkonversi tinggi." },
      { title: "Automation", description: "Mengotomasi browser workflow dan account workers untuk menggantikan proses manual demi efisiensi operasional." },
      { title: "Server Operations", description: "Konfigurasi server Linux, manajemen deployment, proteksi jaringan Cloudflare, dan tuning performa." }
    ]
  } as BilingualServiceItem,

  principles: {
    en: [
      { title: "Simplicity over complexity", description: "Choosing the simplest architecture that solves the actual problem." },
      { title: "Built to last", description: "Designing systems that don't just work today, but are easy to operate and maintain in the future." }
    ],
    id: [
      { title: "Simplicity over complexity", description: "Memilih arsitektur paling sederhana yang bisa menyelesaikan masalah nyata." },
      { title: "Built to last", description: "Mendesain sistem yang bukan cuma bisa berjalan hari ini, tapi mudah dioperasikan dan dipelihara di masa depan." }
    ]
  } as BilingualPrincipleItem,

  contact: {
    github: "https://github.com/idkhalid",
    facebook: "https://fb.com/idhamdotid",
  },

};

export const isIndexableEnvironment = isProductionEnvironment;

export function getSiteUrl(pathname = "/"): string {
  const url = new URL(pathname, `${siteConfig.url}/`);
  if (pathname === "/") {
    return `${url.origin}${url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`}`;
  }
  return `${url.origin}${url.pathname.replace(/\/$/, "")}`;
}

export function isConfigured(value: string): boolean {
  return !value.startsWith("[");
}

export function t(bilingual: BilingualString, locale: Locale): string {
  return bilingual[locale];
}

export function tArray(bilingual: BilingualArray, locale: Locale): string[] {
  return bilingual[locale];
}
