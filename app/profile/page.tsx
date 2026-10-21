import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/lib/data";

export const metadata = { title: "Profile — Zagab" };

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <section className="mb-20 grid items-center gap-10 md:grid-cols-[320px_1fr]">
        <div className="gradient-border mx-auto w-full max-w-xs"><div className="inner overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profile.photo} alt="Foto Zagab" className="aspect-[3/4] w-full object-cover" />
        </div></div>
        <div>
          <h1 className="font-display text-4xl font-extrabold sm:text-6xl"><span className="text-brand">{profile.name}</span></h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">{profile.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.contacts.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="btn-ghost">{c.label}</a>
            ))}
          </div>
          <a href={profile.cv} download className="btn-brand mt-6 px-8 py-4 text-lg shadow-[0_0_40px_-8px_#3DDBC2]">Download CV</a>
        </div>
      </section>

      <section className="mb-20">
        <SectionTitle>Education</SectionTitle>
        <ul className="space-y-4">
          {profile.education.map((e) => (
            <li key={e.school} className="border-l-2 border-brand-teal pl-4">
              <p className="font-semibold">{e.school}</p><p className="text-white/70">{e.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionTitle>Tools I Use</SectionTitle>
        <ul className="flex flex-wrap gap-3">
          {profile.tools.map((t) => <li key={t} className="rounded-full border border-white/20 px-4 py-2">{t}</li>)}
        </ul>
      </section>
    </div>
  );
}
