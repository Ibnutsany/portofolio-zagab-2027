import Link from "next/link";

export default function TopBanner() {
  return (
    <div className="flex h-9 w-full items-center justify-center bg-brand">
      <Link
        href="/game"
        className="rounded-full bg-ink px-4 py-0.5 text-sm font-semibold text-white transition active:scale-95 hover:text-brand-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        Zagab 2027
      </Link>
    </div>
  );
}
