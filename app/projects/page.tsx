import SectionTitle from "@/components/SectionTitle";
import WorkCard from "@/components/WorkCard";
import { projectCategories } from "@/lib/data";

export const metadata = { title: "Projects — Zagab" };

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="mb-16 font-display text-5xl font-extrabold sm:text-6xl"><span className="text-brand">Projects</span></h1>
      {projectCategories.map((c) => (
        <section key={c.id} id={c.id} className="mb-20 scroll-mt-24">
          <SectionTitle>{c.title}</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.items.map((w) => <WorkCard key={w.title} work={w} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
