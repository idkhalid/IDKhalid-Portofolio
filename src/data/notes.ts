export interface Note {
  date: string;
  slug: string;
  title: string;
  title_id: string;
  excerpt: string;
  excerpt_id: string;
}

export const notes: Note[] = [
  {
    date: "2026.08",
    slug: "protecting-origin-behind-cloudflare",
    title: "Protecting an origin behind Cloudflare",
    title_id: "Melindungi origin di balik Cloudflare",
    excerpt:
      "Setting up iptables rules to restrict direct origin access to Cloudflare's published IP ranges. Includes a systemd timer to keep the allowlist updated automatically.",
    excerpt_id:
      "Mengatur aturan iptables untuk membatasi akses langsung ke origin hanya dari range IP Cloudflare. Termasuk systemd timer untuk memperbarui allowlist secara otomatis.",
  },
  {
    date: "2026.07",
    slug: "running-multiple-telethon-services",
    title: "Running multiple Telethon services reliably",
    title_id: "Menjalankan banyak layanan Telethon secara reliable",
    excerpt:
      "Operating 10 independent Telegram automation services on a single VPS using systemd. Each service gets its own virtualenv, working directory, and restart policy.",
    excerpt_id:
      "Mengoperasikan 10 layanan automasi Telegram independen di satu VPS menggunakan systemd. Setiap layanan mendapat virtualenv, working directory, dan restart policy sendiri.",
  },
  {
    date: "2026.06",
    slug: "testing-multi-account-browser-automation",
    title: "Testing multi-account browser automation",
    title_id: "Menguji automasi browser multi-akun",
    excerpt:
      "Validating isolated Playwright browser contexts with sticky proxies for multi-account marketplace operations. Measuring listing throughput and detection avoidance.",
    excerpt_id:
      "Memvalidasi konteks browser Playwright terisolasi dengan sticky proxy untuk operasi marketplace multi-akun. Mengukur throughput listing dan penghindaran deteksi.",
  },
];
