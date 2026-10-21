import { about } from "@/lib/data";

export const metadata = { title: "About — Zagab" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="mb-10 font-display text-5xl font-extrabold sm:text-6xl"><span className="text-brand">About</span></h1>
      <div className="space-y-6 text-lg leading-relaxed text-white/85">
        {about.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <p className="mt-20 border-t border-white/10 pt-6 text-center text-sm text-white/60">© 2026 ZAGAB. Semua hak dilindungi.</p>
    </div>
  );
}
