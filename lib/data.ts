// Semua konten ada di sini. Ganti teks, gambar (/public/images/...), dan link sesuai karyamu.

export type Work = { title: string; tag: string; image?: string; href?: string };

export const projectCategories: { id: string; title: string; items: Work[] }[] = [
  { id: "popular", title: "Most Popular Projects", items: [
    { title: "Project Populer 1", tag: "Poster" }, { title: "Project Populer 2", tag: "3D" },
    { title: "Project Populer 3", tag: "Motion" } ] },
  { id: "3d", title: "Project 3D", items: [
    { title: "3D Project 1", tag: "3D" }, { title: "3D Project 2", tag: "3D" }, { title: "3D Project 3", tag: "3D" } ] },
  { id: "motion", title: "Project Motion Graphic", items: [
    { title: "Motion 1", tag: "Motion" }, { title: "Motion 2", tag: "Motion" }, { title: "Motion 3", tag: "Motion" } ] },
  { id: "graphic", title: "Project Design Graphic", items: [
    { title: "Graphic 1", tag: "Design" }, { title: "Graphic 2", tag: "Design" }, { title: "Graphic 3", tag: "Design" } ] },
  { id: "poster", title: "Project Poster", items: [
    { title: "Poster 1", tag: "Poster" }, { title: "Poster 2", tag: "Poster" }, { title: "Poster 3", tag: "Poster" } ] },
  { id: "video", title: "Project Video Editor", items: [
    { title: "Video 1", tag: "Video" }, { title: "Video 2", tag: "Video" }, { title: "Video 3", tag: "Video" } ] },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/game", label: "Game Segment" },
  { href: "/profile", label: "Profile" },
  { href: "/about", label: "About" },
];

export const game = {
  release: "Soon, Q1 2027",
  features: [
    { title: "Fitur Gameplay 1", desc: "Jelaskan fitur utama game di sini." },
    { title: "Fitur Gameplay 2", desc: "Jelaskan fitur kedua di sini." },
    { title: "Fitur Gameplay 3", desc: "Jelaskan fitur ketiga di sini." },
  ],
  screenshots: ["Screenshot 1", "Screenshot 2", "Screenshot 3", "Screenshot 4"],
  music: [
    { title: "Main Theme", artist: "Nama Komposer", src: "" },
    { title: "Gameplay Track", artist: "Nama Komposer", src: "" },
  ],
  credits: [
    { role: "Game Design & Art", name: "Zagab" },
    { role: "Music", name: "Nama Komposer" },
  ],
};

export const profile = {
  name: "Bhagaskoro but Call me Zagab",
  photo: "/images/me.jpg",
  description: "Tulis deskripsi singkat tentang dirimu sebagai desainer di sini.",
  education: [
    { school: "Nama Universitas", detail: "Program Studi, 20XX – sekarang" },
    { school: "Nama SMA/SMK", detail: "Jurusan, 20XX – 20XX" },
  ],
  tools: ["Blender", "After Effects", "Photoshop", "Illustrator", "Premiere Pro", "Figma"],
  contacts: [
    { label: "Behance", href: "https://www.behance.net/USERNAME" },
    { label: "TikTok", href: "https://www.tiktok.com/@USERNAME" },
    { label: "Instagram", href: "https://www.instagram.com/USERNAME" },
    { label: "WhatsApp", href: "https://wa.me/62XXXXXXXXXX" },
  ],
  cv: "/cv/CV-Zagab.pdf",
};

export const about: string[] = [
  "Paragraf 1: perkenalkan siapa dirimu dan apa yang kamu kerjakan sebagai desainer kreatif.",
  "Paragraf 2: ceritakan awal mula perjalananmu di dunia desain.",
  "Paragraf 3: jelaskan bidang yang kamu tekuni: 3D, motion graphic, desain grafis, poster, dan video editing.",
  "Paragraf 4: ceritakan proses kreatifmu, dari ide sampai karya jadi.",
  "Paragraf 5: ceritakan tentang proyek game dan rencana ke depan.",
  "Paragraf 6: ajak pengunjung untuk berkolaborasi dan menghubungimu.",
];
