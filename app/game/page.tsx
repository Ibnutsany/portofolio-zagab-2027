import SectionTitle from "@/components/SectionTitle";
import { game } from "@/lib/data";

export const metadata = { title: "Game Segment — Zagab" };

export default function GamePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <section className="mb-20">
        <h1 className="font-display text-5xl font-extrabold sm:text-7xl"><span className="text-brand">{game.release}</span></h1>
        <p className="mt-4 text-white/70">Game buatan Zagab sedang dalam pengembangan.</p>
      </section>

      <section className="mb-20">
        <SectionTitle>Fitur Gameplay</SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {game.features.map((f) => (
            <div key={f.title} className="gradient-border"><div className="inner p-6">
              <h3 className="font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </div></div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <SectionTitle>Screenshot Gameplay</SectionTitle>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {game.screenshots.map((s) => (
            <div key={s} className="flex aspect-video items-center justify-center rounded-2xl bg-brand-diag/30 text-white/60 ring-1 ring-white/10">{s}</div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <SectionTitle>Music Game</SectionTitle>
        <ul className="space-y-4">
          {game.music.map((m) => (
            <li key={m.title} className="rounded-2xl border border-white/10 p-4">
              <p className="font-semibold">{m.title}</p>
              <p className="mb-2 text-sm text-brand-teal">{m.artist}</p>
              {m.src ? <audio controls src={m.src} className="w-full" /> : <p className="text-sm text-white/50">Tambahkan file audio di /public/audio dan isi src di lib/data.ts.</p>}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionTitle>Credits</SectionTitle>
        <dl className="divide-y divide-white/10 border-y border-white/10">
          {game.credits.map((c) => (
            <div key={c.role} className="flex justify-between gap-4 py-3">
              <dt className="text-white/70">{c.role}</dt><dd className="font-semibold">{c.name}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
