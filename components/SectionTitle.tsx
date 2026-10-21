export default function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{children}</h2>
      <div className="mt-3 h-1 w-20 rounded bg-brand" />
      {sub && <p className="mt-3 max-w-xl text-white/70">{sub}</p>}
    </div>
  );
}
