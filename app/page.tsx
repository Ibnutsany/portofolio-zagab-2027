import Link from "next/link";
import ScrollVideoHero from "@/components/ScrollVideoHero";
import SectionTitle from "@/components/SectionTitle";
import WorkCard from "@/components/WorkCard";
import { projectCategories } from "@/lib/data";

export default function Home() {
  const featured = projectCategories[0].items;
  return (
    <>
      <ScrollVideoHero />
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle sub="Pilihan karya yang paling sering dilihat.">Shortcut Karya</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((w) => <WorkCard key={w.title} work={w} />)}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {projectCategories.slice(1).map((c) => (
            <Link key={c.id} href={`/projects#${c.id}`} className="btn-ghost">{c.title.replace("Project ", "")}</Link>
          ))}
        </div>
        <Link href="/projects" className="btn-brand mt-10">Lihat semua project</Link>
      </section>
    </>
  );
}
