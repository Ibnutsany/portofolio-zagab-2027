"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/data";

export default function Headbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label="Beranda Zagab" className="text-2xl font-display font-extrabold tracking-tight transition active:scale-95">
            <span className="text-brand">ZAGAB</span>
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Buka menu"
            aria-expanded={open}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/30 transition active:scale-95 hover:border-brand-teal"
          >
            <span className="h-0.5 w-5 bg-white" /><span className="h-0.5 w-5 bg-white" /><span className="h-0.5 w-3 self-end bg-white mr-3" />
          </button>
        </div>
      </header>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        role="dialog"
        aria-label="Menu navigasi"
        className={`fixed right-0 top-0 z-50 flex h-full w-[80%] max-w-sm flex-col bg-ink p-6 shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mb-10 h-1 w-full rounded bg-brand" />
        <button onClick={() => setOpen(false)} className="mb-8 self-end rounded-full border border-white/30 px-4 py-2 text-sm transition active:scale-95 hover:border-brand-teal">
          Tutup
        </button>
        <nav className="flex flex-col gap-2">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link key={n.href} href={n.href} className={`font-display text-3xl font-bold transition hover:translate-x-2 ${active ? "text-brand" : "text-white"}`}>
                {n.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
