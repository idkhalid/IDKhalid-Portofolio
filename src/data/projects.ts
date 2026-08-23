import type { Locale } from "@/i18n/types";

export interface Project {
  index: string;
  slug: string;
  category: string;
  year: number;
  title: string;
  summary: string;
  summary_id?: string;
  stack: string[];
  verifiedResults: string[];
  verifiedResults_id?: string[];
  designTargets?: string[];
  designTargets_id?: string[];
  scope?: string[];
  scope_id?: string[];
  operationalTarget?: string;
  operationalTarget_id?: string;
  image?: string;
  liveUrl?: string;

  caseStudy: {
    context: string;
    constraints: string[];
    systemDesign: string;
    keyDecisions: string[];
    verification: string;
    improvements: string[];
    role: string;
    duration: string;
    status: string;
  };
  caseStudy_id?: {
    context: string;
    constraints: string[];
    systemDesign: string;
    keyDecisions: string[];
    verification: string;
    improvements: string[];
    role: string;
    duration: string;
    status: string;
  };
}

export function getProjectCaseStudy(project: Project, locale: Locale) {
  if (locale === "id" && project.caseStudy_id) {
    return project.caseStudy_id;
  }
  return project.caseStudy;
}

export function localizedString(
  en: string,
  id: string | undefined,
  locale: Locale
): string {
  if (locale === "id" && id !== undefined) return id;
  return en;
}

export function localizedArray(
  en: string[],
  id: string[] | undefined,
  locale: Locale
): string[] {
  if (locale === "id" && id !== undefined) return id;
  return en;
}


export const projects: Project[] = [
  {
    index: "01",
    slug: "marketplace-automation",
    category: "Automation",
    year: 2026,
    title: "Marketplace Automation System",
    summary:
      "Multi-account listing automation designed around isolated sessions, sticky proxies, and controlled worker execution.",
    summary_id:
      "Automasi listing multi-akun yang dirancang dengan sesi terisolasi, sticky proxy, dan eksekusi worker terkontrol.",
    stack: ["Python", "Playwright", "Sticky Proxy", "Worker Services"],
    verifiedResults: [
      "300 listings completed in a single-account test",
      "2 accounts tested in parallel at 300 listings each",
      "~5 listings per minute per account during testing",
    ],
    designTargets: ["10 isolated account workers"],
    caseStudy: {
      context:
        "A marketplace operation needed to scale listing creation across multiple accounts without triggering platform detection. Manual listing was too slow—each account required isolated browser sessions, proxy rotation, and controlled pacing.",
      constraints: [
        "Each account session must be fully isolated to avoid cross-contamination",
        "Proxy must remain sticky per session to maintain identity consistency",
        "Listing rate must stay within platform tolerance thresholds",
        "Worker failures must not cascade to other accounts",
      ],
      systemDesign:
        "The system uses isolated Playwright browser contexts per account, each bound to a sticky proxy. A worker service manages the lifecycle of each account session independently. Workers pull listing tasks from a queue and execute them with controlled pacing. Failed tasks are retried within the same session context.",
      keyDecisions: [
        "Chose Playwright over Selenium for better context isolation and modern browser support",
        "Used sticky proxies instead of rotating proxies—session consistency was more important than IP diversity for this use case",
        "Implemented per-worker rate limiting rather than global throttling to maintain independent account pacing",
        "Designed workers as independent services so one failure doesn't affect others",
      ],
      verification:
        "Single-account test completed 300 listings successfully. Parallel test with 2 accounts completed 300 listings each at approximately 5 listings per minute per account. No detection events during testing. Design target is 10 account workers—not yet verified in production.",
      improvements: [
        "Implement centralized monitoring dashboard for all worker states",
        "Add automatic proxy health checking and rotation on failure",
        "Build retry queue for failed listings with backoff strategy",
        "Scale testing to the 10-worker design target",
      ],
      role: "Sole developer",
      duration: "Ongoing",
      status: "Testing phase — 2 accounts verified, 10-account target pending",
    },
  },
  {
    index: "02",
    slug: "cloudflare-origin-lock",
    category: "Infrastructure Security",
    year: 2026,
    title: "Cloudflare Origin Lock",
    summary:
      "Server-level traffic controls that keep the origin reachable through Cloudflare while reducing direct exposure.",
    summary_id:
      "Kontrol traffic level server yang menjaga origin tetap bisa diakses melalui Cloudflare sambil mengurangi paparan langsung.",
    stack: ["Ubuntu", "iptables", "Cloudflare", "systemd"],
    verifiedResults: [
      "Origin HTTP/HTTPS access restricted to approved Cloudflare network ranges",
    ],
    image: "/work/cloudflare-origin-lock.png",
    caseStudy: {
      context:
        "An origin server was directly accessible on the internet, bypassing Cloudflare's proxy layer. Any traffic could reach the origin directly, making the Cloudflare layer ineffective for protection and caching.",
      constraints: [
        "The server must remain accessible through Cloudflare's proxy network",
        "Direct access to HTTP and HTTPS ports must be blocked for non-Cloudflare IPs",
        "Cloudflare IP ranges change periodically and must be updated",
        "SSH and management access must remain available",
      ],
      systemDesign:
        "iptables rules restrict inbound HTTP/HTTPS traffic to Cloudflare's published IP ranges. A systemd timer periodically fetches the latest Cloudflare IP list and rebuilds the firewall rules. Management ports use separate allowlists.",
      keyDecisions: [
        "Used iptables directly instead of ufw for more precise control over rule ordering",
        "Automated IP range updates via systemd timer rather than manual cron for better logging and failure visibility",
        "Kept SSH access on a separate allowlist to avoid lockout during firewall updates",
        "Chose to rebuild rules entirely on each update rather than diffing—simpler and more predictable",
      ],
      verification:
        "After applying rules, direct HTTP/HTTPS requests to the origin IP are refused. Traffic through Cloudflare continues to work normally. Verified by testing from external IPs outside Cloudflare's ranges.",
      improvements: [
        "Add monitoring alerts for firewall rule update failures",
        "Implement Cloudflare Authenticated Origin Pulls for an additional verification layer",
        "Document the recovery procedure if Cloudflare IP ranges update and the timer fails",
      ],
      role: "Sole developer",
      duration: "1 week implementation, ongoing operation",
      status: "Active in production",
    },
  },
  {
    index: "03",
    slug: "http-protocol-resilience-tester",
    category: "Security Engineering",
    year: 2026,
    title: "HTTP Protocol Resilience Tester",
    summary:
      "An infrastructure testing tool for assessing HTTP/2 and HTTP/3 service resilience under extreme load conditions.",
    summary_id:
      "Tool pengujian infrastruktur untuk menilai ketahanan layanan HTTP/2 dan HTTP/3 di bawah kondisi beban ekstrem.",
    stack: ["Go", "net/http", "x/net/http2", "quic-go/http3", "uTLS"],
    verifiedResults: [
      "Authorized test generated consistent 2.5 Gbps / 400K RPS load",
      "Successfully bypassed WAF generic rules using uTLS fingerprinting in isolated environments",
      "Identified and mitigated Layer 7 bottlenecks on internal staging infrastructure",
    ],
    verifiedResults_id: [
      "Pengujian terotorisasi menghasilkan beban konsisten 2.5 Gbps / 400K RPS",
      "Berhasil melewati aturan umum WAF menggunakan uTLS fingerprinting di lingkungan terisolasi",
      "Mengidentifikasi dan memitigasi bottleneck Layer 7 pada infrastruktur staging internal",
    ],
    designTargets: [
      "High concurrency architecture using Go goroutines",
      "Built-in safeguards (target allowlist, hard kill switch, strict rate limiters)",
    ],
    designTargets_id: [
      "Arsitektur konkurensi tinggi menggunakan Go goroutines",
      "Pengaman bawaan (allowlist target, kill switch keras, pembatas rate ketat)",
    ],
    image: "/work/http-protocol-resilience-tester.jpg",
    caseStudy: {
      context:
        "Standard load testing tools often fail to accurately simulate real-world sophisticated bot traffic, making it difficult to assess how infrastructure handles modern application-layer stress. We needed a custom tool to validate the resilience of internal staging environments against high-concurrency HTTP/2 and HTTP/3 scenarios with realistic TLS fingerprints.",
      constraints: [
        "Must generate significant load without exhausting the host machine's resources",
        "Traffic must resemble legitimate browser patterns to bypass basic heuristic drops",
        "Must include strict safeguards to prevent accidental targeting of unauthorized infrastructure",
      ],
      systemDesign:
        "Built in Go for its lightweight concurrency model (goroutines). The tool uses uTLS for JA3/JA4 fingerprint spoofing, making requests appear as standard Chrome/Firefox traffic. It supports raw HTTP/2 framing and HTTP/3 (QUIC). The architecture includes a centralized rate limiter, dynamic proxy rotation, and a hardcoded target allowlist to ensure it can only be used against designated staging networks.",
      keyDecisions: [
        "Chose Go over Python/C++ for the optimal balance of development speed and high-concurrency network performance",
        "Integrated uTLS instead of standard crypto/tls to enable customizable client hello fingerprints",
        "Implemented strict safeguards at the core level rather than as configuration options, ensuring safe operation by default",
      ],
      verification:
        "During authorized testing on internal staging, the tool successfully generated sustained loads of 400K RPS. This allowed the infrastructure team to identify a bottleneck in the ingress controller's connection tracking table and tune the kernel parameters accordingly.",
      improvements: [
        "Implement a more granular reporting dashboard for real-time latency histograms",
        "Add support for automated proxy health checks before test initialization",
        "Containerize the tool for distributed execution across a Kubernetes cluster",
      ],
      role: "Security Engineer",
      duration: "3 weeks",
      status: "Internal tool — used for authorized infrastructure testing",
    },
    caseStudy_id: {
      context:
        "Tool load testing standar sering gagal mensimulasikan traffic bot canggih di dunia nyata secara akurat, sehingga sulit untuk menilai bagaimana infrastruktur menangani tekanan layer-aplikasi modern. Kami membutuhkan tool custom untuk memvalidasi ketahanan lingkungan staging internal terhadap skenario HTTP/2 dan HTTP/3 dengan konkurensi tinggi dengan fingerprint TLS yang realistis.",
      constraints: [
        "Harus menghasilkan beban yang signifikan tanpa menguras sumber daya mesin host",
        "Traffic harus menyerupai pola browser yang sah untuk menghindari drop heuristik dasar",
        "Harus menyertakan pengaman ketat untuk mencegah penargetan infrastruktur yang tidak sah secara tidak sengaja",
      ],
      systemDesign:
        "Dibangun menggunakan Go untuk model konkurensinya yang ringan (goroutines). Tool ini menggunakan uTLS untuk spoofing fingerprint JA3/JA4, membuat request tampak seperti traffic Chrome/Firefox standar. Mendukung raw HTTP/2 framing dan HTTP/3 (QUIC). Arsitekturnya mencakup rate limiter terpusat, rotasi proxy dinamis, dan allowlist target hardcode untuk memastikan hanya bisa digunakan terhadap jaringan staging yang ditunjuk.",
      keyDecisions: [
        "Memilih Go daripada Python/C++ untuk keseimbangan optimal antara kecepatan pengembangan dan performa jaringan konkurensi tinggi",
        "Mengintegrasikan uTLS alih-alih crypto/tls standar untuk mengaktifkan fingerprint client hello yang dapat disesuaikan",
        "Menerapkan pengaman ketat di level inti daripada sebagai opsi konfigurasi, memastikan operasi yang aman secara default",
      ],
      verification:
        "Selama pengujian terotorisasi pada staging internal, tool ini berhasil menghasilkan beban berkelanjutan sebesar 400K RPS. Hal ini memungkinkan tim infrastruktur untuk mengidentifikasi bottleneck pada tabel pelacakan koneksi ingress controller dan menyesuaikan parameter kernel yang sesuai.",
      improvements: [
        "Menerapkan dashboard pelaporan yang lebih detail untuk histogram latensi real-time",
        "Menambahkan dukungan untuk pemeriksaan kesehatan proxy otomatis sebelum inisialisasi tes",
        "Mengemas tool dalam container untuk eksekusi terdistribusi di seluruh cluster Kubernetes",
      ],
      role: "Security Engineer",
      duration: "3 minggu",
      status: "Tool internal — digunakan untuk pengujian infrastruktur terotorisasi",
    }
  },
  {
    index: "04",
    slug: "hosting-operations-dashboard",
    category: "Internal Tool",
    year: 2026,
    title: "Hosting Operations Dashboard",
    summary:
      "A web interface over hosting-control APIs for account and domain operations at operational scale.",
    summary_id:
      "Antarmuka web di atas API hosting-control untuk operasi akun dan domain pada skala operasional.",
    stack: ["PHP", "Hestia API", "DataTables", "MySQL"],
    verifiedResults: [],
    scope: [
      "User inventory",
      "Domain inventory",
      "Account provisioning",
      "Desktop and mobile tables",
    ],
    operationalTarget: "~500 managed users",
    caseStudy: {
      context:
        "Managing hosting accounts through the default control panel became impractical at scale. Individual account operations—provisioning, domain management, inventory checks—required too many clicks and couldn't be done efficiently on mobile.",
      constraints: [
        "Must work over the existing Hestia control panel API",
        "Must support both desktop and mobile workflows",
        "Must handle inventory views for approximately 500 users without performance issues",
        "Must not require additional server infrastructure beyond the existing hosting server",
      ],
      systemDesign:
        "A PHP application sits on the same server as Hestia, communicating with its API for all operations. DataTables provides client-side sorting, filtering, and pagination for large inventory views. MySQL stores operational metadata and audit logs.",
      keyDecisions: [
        "Built on PHP to match the existing server environment—no additional runtime needed",
        "Used DataTables for responsive tables rather than building custom table components",
        "Connected directly to Hestia API instead of scraping the web interface",
        "Kept the dashboard on the same server to avoid network latency and additional infrastructure",
      ],
      verification:
        "The dashboard handles user and domain inventory views for the current operational scope. Account provisioning works through the API integration. Tables remain responsive on both desktop and mobile.",
      improvements: [
        "Add bulk operations for common tasks like mass domain renewal checks",
        "Implement role-based access if more operators need dashboard access",
        "Add API response caching for frequently accessed inventory data",
      ],
      role: "Sole developer",
      duration: "2 weeks initial build, iterative improvements",
      status: "Active — used for daily operations",
    },
  },
  {
    index: "05",
    slug: "trading-investment-platform",
    category: "Web Application",
    year: 2026,
    title: "Trading & Investment Platform",
    summary:
      "A complete recode of a HYIP script frontend and integration of automated withdrawal systems to meet custom client requirements.",
    summary_id:
      "Perombakan total tampilan script HYIP dan integrasi sistem penarikan otomatis (withdraw) untuk memenuhi kebutuhan klien.",
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    verifiedResults: [
      "Live and operational at trading-forex.my.id",
      "Custom layout integration for Landing, Login, Register, and Dashboard",
      "Implemented automatic and manual withdrawal systems",
    ],
    verifiedResults_id: [
      "Beroperasi aktif secara live di trading-forex.my.id",
      "Integrasi layout custom untuk Landing page, Login, Register, dan Dashboard",
      "Implementasi sistem penarikan dana (withdraw) otomatis dan manual",
    ],
    liveUrl: "https://trading-forex.my.id/",
    caseStudy: {
      context:
        "A client needed a custom trading and investment platform. Instead of building from scratch, we utilized an existing HYIP Complete System as the core engine. However, the default interface and some critical financial workflows did not meet the client's operational standards.",
      constraints: [
        "Must use the existing HYIP core engine to save development time",
        "The entire user interface (Landing page, Auth, Dashboard) must be completely recoded to match a custom design",
        "The withdrawal system needed modification to support both manual review and automated processing",
      ],
      systemDesign:
        "The project involved deep refactoring of the provided source code. The presentation layer was entirely stripped out and replaced with a custom responsive layout. On the backend, new controllers and services were injected into the existing architecture to handle automated withdrawals securely.",
      keyDecisions: [
        "Decided to recode the frontend completely rather than just applying CSS overrides to ensure a truly custom user experience",
        "Retained the core database schema and transaction engine of the HYIP script to leverage its tested financial logic",
        "Added modular automated withdrawal logic that can be toggled per-user or globally for risk management",
      ],
      verification:
        "The platform is successfully deployed and running live. The custom layouts render correctly across devices, and the hybrid withdrawal system handles transactions according to the client's business rules.",
      improvements: [
        "Implement comprehensive unit tests for the custom withdrawal logic",
        "Add automated monitoring for transaction anomalies",
      ],
      role: "Backend & Frontend Integrator",
      duration: "Freelance Project",
      status: "Active — Live at trading-forex.my.id",
    },
    caseStudy_id: {
      context:
        "Klien membutuhkan platform trading dan investasi dengan desain khusus. Alih-alih membangun dari nol, kami menggunakan source code HYIP Complete System sebagai engine utama. Namun, tampilan bawaan dan beberapa alur kerja finansial belum memenuhi standar operasional klien.",
      constraints: [
        "Harus menggunakan engine HYIP yang ada untuk menghemat waktu pengembangan",
        "Seluruh antarmuka pengguna (Landing page, Auth, Dashboard) harus dirombak total menyesuaikan desain custom",
        "Sistem penarikan dana (withdraw) perlu dimodifikasi untuk mendukung review manual sekaligus pemrosesan otomatis",
      ],
      systemDesign:
        "Project ini difokuskan pada refactoring mendalam terhadap source code asli. Layer presentasi dibongkar habis dan diganti dengan layout responsif yang baru. Di sisi backend, logika baru disuntikkan ke dalam arsitektur yang ada untuk menangani penarikan dana otomatis secara aman.",
      keyDecisions: [
        "Memutuskan untuk me-recode frontend secara menyeluruh daripada hanya sekadar menimpa CSS, demi memastikan pengalaman pengguna yang benar-benar custom",
        "Mempertahankan skema database dan engine transaksi inti dari script HYIP untuk memanfaatkan logika finansialnya yang sudah teruji",
        "Menambahkan logika withdrawal otomatis modular yang dapat diatur per-pengguna atau secara global untuk manajemen risiko",
      ],
      verification:
        "Platform telah berhasil di-deploy dan berjalan secara live. Layout custom tampil sempurna di berbagai perangkat, dan sistem withdrawal hybrid menangani transaksi sesuai dengan aturan bisnis klien.",
      improvements: [
        "Menerapkan unit test komprehensif untuk logika withdrawal custom",
        "Menambahkan monitoring otomatis untuk mendeteksi anomali transaksi",
      ],
      role: "Backend & Frontend Integrator",
      duration: "Freelance Project",
      status: "Active — Live di trading-forex.my.id",
    },
  },
  {
    index: "06",
    slug: "telegram-service-fleet",
    category: "Service Operations",
    year: 2026,
    title: "Telegram Service Fleet",
    summary:
      "Multiple isolated Telegram automation services operated persistently on a Linux VPS.",
    summary_id:
      "Beberapa layanan automasi Telegram terisolasi yang dioperasikan secara persisten di VPS Linux.",
    stack: ["Python", "Telethon", "systemd", "Ubuntu"],
    verifiedResults: ["10 independent systemd services running"],
    caseStudy: {
      context:
        "Multiple Telegram automation tasks needed to run persistently on a single VPS. Each service had different requirements, schedules, and failure modes. Running them all in a single process or under one service was fragile.",
      constraints: [
        "Each service must be isolated—a crash in one must not affect others",
        "Services must restart automatically after failures or server reboots",
        "Each service needs its own virtual environment to avoid dependency conflicts",
        "Logs must be accessible per-service for debugging",
      ],
      systemDesign:
        "Each Telegram automation runs as an independent systemd service with its own working directory, Python virtual environment, and log output. systemd handles process lifecycle, automatic restarts, and boot-time startup. Services are managed through standard systemctl commands.",
      keyDecisions: [
        "Used systemd over supervisor or pm2—native to Ubuntu, no additional runtime",
        "Gave each service its own virtualenv instead of a shared environment to prevent dependency conflicts",
        "Configured restart policies per-service based on expected failure modes",
        "Kept working directories separate so file operations don't interfere between services",
      ],
      verification:
        "10 services run independently. Individual service restarts don't affect others. Services recover automatically after server reboots. Per-service journalctl logs enable targeted debugging.",
      improvements: [
        "Build a simple status dashboard showing all service states",
        "Add centralized log aggregation for easier monitoring",
        "Implement health check endpoints for proactive alerting",
        "Document the deployment procedure for adding new services",
      ],
      role: "Sole developer",
      duration: "Ongoing",
      status: "Active — 10 services in production",
    },
  },
  {
    index: "07",
    slug: "cekresiku",
    category: "Web Application",
    year: 2026,
    title: "CekResiKu",
    summary:
      "Aplikasi pelacakan paket modern dengan admin panel Filament v3, autofill 83.000+ data kodepos Indonesia, dan riwayat tracking otomatis.",
    summary_id:
      "Aplikasi pelacakan paket modern dengan admin panel Filament v3, autofill 83.000+ data kodepos Indonesia, dan riwayat tracking otomatis.",
    stack: ["Laravel 11", "Filament v3", "Tailwind CSS", "Vite", "MySQL"],
    verifiedResults: [
      "Pencarian resi dengan antarmuka responsif di desktop dan mobile",
      "Autofill kecamatan dan kota dari 83.000+ data kodepos Indonesia",
      "Admin panel Filament v3 berbahasa Indonesia",
    ],
    scope: [
      "Manajemen pengiriman (shipments)",
      "Manajemen kurir (couriers)",
      "Riwayat pelacakan otomatis via relation manager",
      "Autofill alamat dari database kodepos",
    ],
    caseStudy: {
      context:
        "Dibutuhkan sistem pelacakan paket yang bisa dikelola secara mandiri, dengan antarmuka admin yang lengkap dan pencarian resi yang cepat untuk end-user. Solusi SaaS yang ada terlalu mahal untuk skala operasional ini, dan tidak memberikan kontrol penuh atas data.",
      constraints: [
        "Harus bisa di-deploy di shared hosting maupun VPS dengan PHP 8.2+",
        "Admin panel harus berbahasa Indonesia tanpa perlu kustomisasi rumit",
        "Pengisian alamat pengirim dan penerima harus cepat—tidak boleh manual ketik kecamatan/kota",
        "Riwayat pergerakan paket harus tercatat otomatis dan bisa di-update dari admin panel",
      ],
      systemDesign:
        "Aplikasi Laravel 11 dengan Filament v3 sebagai admin panel. Database menyimpan data pengiriman, kurir, dan riwayat tracking. Tabel kodepos berisi 83.000+ entry untuk autofill alamat. Frontend publik menggunakan Tailwind CSS dengan Vite untuk asset pipeline. Desain UI terinspirasi J&T Express dengan animasi halus dan transisi status.",
      keyDecisions: [
        "Memilih Filament v3 daripada Nova atau custom admin—UI lebih modern, gratis, dan native support bahasa Indonesia",
        "Menggunakan relation manager Filament untuk riwayat tracking, bukan custom CRUD terpisah",
        "Import 83.000+ data kodepos via artisan command untuk menjaga proses migrasi tetap bersih",
        "Asset build menggunakan Vite bawaan Laravel 11—tidak perlu setup bundler tambahan",
      ],
      verification:
        "Pencarian resi bekerja responsif di desktop dan mobile. Autofill kecamatan/kota berjalan dari database kodepos lokal. Admin panel Filament menampilkan data pengiriman, kurir, dan riwayat tracking dengan navigasi penuh bahasa Indonesia.",
      improvements: [
        "Integrasi API kurir pihak ketiga untuk tracking otomatis real-time",
        "Notifikasi via WhatsApp atau email saat status paket berubah",
        "Bulk import resi dari file CSV untuk operasi skala besar",
        "Dashboard statistik pengiriman per kurir dan per periode",
      ],
      role: "Sole developer",
      duration: "Ongoing",
      status: "Active",
    },
  },
  {
    index: "08",
    slug: "simpel-order-sistem",
    category: "Web Application",
    year: 2026,
    title: "SIMPEL Order Sistem",
    summary:
      "Platform landing page dan checkout funnel instan untuk single-product sales — dilengkapi kalkulasi ongkir otomatis, notifikasi Telegram, dan admin panel Filament.",
    summary_id:
      "Platform landing page dan checkout funnel instan untuk single-product sales — dilengkapi kalkulasi ongkir otomatis, notifikasi Telegram, dan admin panel Filament.",
    stack: ["Laravel 10", "Filament v3", "Alpine.js", "Tailwind CSS", "MySQL"],
    verifiedResults: [
      "Landing page live di ordersekarang.shop dengan checkout funnel aktif",
      "Kalkulasi ongkir J&T Express real-time via API Lincah.id",
      "Notifikasi pesanan otomatis ke Telegram Bot admin",
    ],
    scope: [
      "Responsive landing page dengan galeri produk dan testimoni",
      "Instant checkout satu halaman dengan pencarian kecamatan dinamis",
      "Manajemen produk, testimoni, dan pesanan via Filament admin panel",
      "SEO-friendly URL slug untuk setiap produk",
    ],
    image: "/work/simpel-order-sistem.jpg",
    liveUrl: "https://ordersekarang.shop/",
    caseStudy: {
      context:
        "Dibutuhkan platform penjualan single-product yang bisa disetup cepat untuk berbagai produk, dengan checkout yang simple dan tingkat konversi tinggi. Marketplace tidak memberikan kontrol penuh atas customer journey dan biaya komisi memotong margin.",
      constraints: [
        "Checkout harus satu halaman—tidak boleh multi-step yang membuat customer drop off",
        "Ongkir harus otomatis dihitung, customer tidak boleh bingung soal biaya pengiriman",
        "Admin harus langsung dapat notifikasi pesanan baru tanpa harus buka dashboard",
        "Harus bisa di-deploy di shared hosting PHP standar",
      ],
      systemDesign:
        "Laravel 10 sebagai backend dengan Filament v3 untuk admin panel. Landing page di-render server-side via Blade dengan Alpine.js untuk interaktivitas. Checkout form menggunakan pencarian kecamatan dinamis melalui API Lincah.id dan kalkulasi ongkir langsung dari J&T Express. Setiap pesanan baru memicu notifikasi ke Telegram Bot via API. Produk menggunakan SEO-friendly slug URL.",
      keyDecisions: [
        "Memilih Blade + Alpine.js daripada SPA framework—lebih ringan untuk landing page dan lebih baik untuk SEO",
        "Integrasi API Lincah.id untuk pencarian kecamatan karena database kodepos saja tidak cukup akurat untuk tarif ongkir",
        "Notifikasi via Telegram Bot bukan email—respons admin lebih cepat karena Telegram selalu aktif di HP",
        "Single-product checkout funnel daripada cart system—konversi lebih tinggi untuk model penjualan ini",
      ],
      verification:
        "Landing page aktif di ordersekarang.shop dengan checkout funnel berjalan. Kalkulasi ongkir J&T Express otomatis berdasarkan lokasi. Notifikasi pesanan masuk ke grup Telegram admin secara real-time dengan detail lengkap termasuk nomor invoice.",
      improvements: [
        "Tambah integrasi payment gateway untuk pembayaran online langsung",
        "Multi-kurir support selain J&T Express",
        "A/B testing framework untuk optimasi konversi landing page",
        "Dashboard analytics penjualan dengan grafik konversi per periode",
      ],
      role: "Sole developer",
      duration: "Ongoing",
      status: "Active — live di ordersekarang.shop",
    },
  },
  {
    index: "09",
    slug: "gadjahmada-network",
    category: "Landing Page",
    year: 2025,
    title: "Gadjah Mada Network",
    summary:
      "Landing page ISP untuk layanan internet fiber optic Inet — menampilkan paket rumahan, apartemen, dan office dengan carousel promo, cek area via kode pos, dan integrasi WhatsApp untuk customer care.",
    summary_id:
      "Landing page ISP untuk layanan internet fiber optic Inet — menampilkan paket rumahan, apartemen, dan office dengan carousel promo, cek area via kode pos, dan integrasi WhatsApp untuk customer care.",
    stack: ["HTML5", "Bootstrap 4", "jQuery", "CSS3", "JavaScript"],
    verifiedResults: [
      "Landing page live di gadjahmada.net",
      "3 kategori paket (Rumahan, Apartemen, Office) dengan CTA langsung ke WhatsApp",
      "Carousel promo banner dengan auto-slide",
    ],
    scope: [
      "Responsive landing page dengan navigasi sticky",
      "Banner promosi carousel otomatis",
      "Kartu paket internet per segmen (Rumahan, Apartemen, Office)",
      "Formulir cek area berdasarkan kode pos",
      "Formulir newsletter dan info customer care",
    ],
    image: "/work/gadjahmada-network.jpg",
    liveUrl: "https://gadjahmada.net",
    caseStudy: {
      context:
        "Sebuah ISP lokal membutuhkan landing page yang bisa diakses cepat untuk memperkenalkan layanan internet fiber optic mereka. Halaman harus menampilkan paket yang tersedia, memudahkan calon pelanggan mengecek ketersediaan area, dan langsung terhubung ke WhatsApp tim sales.",
      constraints: [
        "Harus bisa di-deploy sebagai situs statis tanpa backend atau database",
        "Loading harus cepat karena target pengguna mungkin mengakses dari koneksi terbatas",
        "Semua CTA harus langsung mengarah ke WhatsApp customer care",
        "Tampilan harus responsif di desktop dan mobile — banyak calon pelanggan mengakses dari HP",
      ],
      systemDesign:
        "Situs statis murni menggunakan HTML5 dengan Bootstrap 4 untuk layout responsif. jQuery menangani carousel, animasi scroll (Waypoints), dan validasi form (Parsley.js). Aset frontend (Bootstrap, jQuery, Font Awesome, Swiper) disimpan lokal tanpa CDN dependency. Tidak ada backend — semua aksi pelanggan diarahkan ke WhatsApp via deep link.",
      keyDecisions: [
        "Memilih situs statis tanpa framework backend — deployment lebih sederhana dan hosting lebih murah untuk landing page",
        "Semua CTA mengarah langsung ke WhatsApp daripada form kontak — konversi lebih tinggi karena pelanggan langsung bicara dengan sales",
        "Menyimpan semua library frontend secara lokal, bukan dari CDN — mengurangi dependency pada koneksi internet pihak ketiga",
        "Menggunakan Bootstrap 4 untuk grid system dan responsivitas daripada menulis CSS grid custom",
      ],
      verification:
        "Landing page live dan dapat diakses di gadjahmada.net. Carousel promo berjalan otomatis. Tiga kartu paket (Rumahan, Apartemen, Office) ditampilkan dengan harga dan CTA ke WhatsApp. Menu navigasi responsif di mobile. Footer menampilkan informasi customer care lengkap.",
      improvements: [
        "Menghubungkan formulir cek area ke backend atau API untuk validasi kode pos yang sesungguhnya",
        "Menambahkan halaman detail per paket dengan spesifikasi bandwidth lengkap",
        "Migrasi ke stack modern (Next.js atau Laravel) jika dibutuhkan fitur dinamis seperti halaman admin",
        "Menambahkan analytics tracking untuk mengukur konversi dari landing page ke WhatsApp",
      ],
      role: "Sole developer",
      duration: "December 2025",
      status: "Active — live di gadjahmada.net",
    },
  },
];

