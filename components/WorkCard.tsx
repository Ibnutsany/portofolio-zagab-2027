import type { Work } from "@/lib/data";

export default function WorkCard({ work }: { work: Work }) {
  return (
    <article className="gradient-border group">
      <div className="inner overflow-hidden">
        <div
          className="aspect-[4/3] w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
          style={{ backgroundImage: work.image ? `url(${work.image})` : "linear-gradient(135deg,#F5753833,#3DDBC233)" }}
        />
        <div className="p-4">
          <h3 className="font-display text-lg font-bold">{work.title}</h3>
          <p className="text-sm text-brand-teal">{work.tag}</p>
        </div>
      </div>
    </article>
  );
}
