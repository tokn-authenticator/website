import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { RevealEmail } from "@/components/RevealEmail";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal information and contact details for Tokn.",
  robots: { index: false },
};

const link = "font-medium text-primary underline-offset-4 hover:underline";
const label = "font-mono text-sm uppercase tracking-widest text-muted";

export default function Imprint() {
  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Tokn home">
            <BrandMark className="h-9 w-9" />
            <span className="font-display text-lg font-semibold tracking-tight">Tokn</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-text"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>

        <h1 className="mt-6 text-balance text-4xl font-bold">Imprint</h1>
        <p className="mt-3 font-mono text-sm text-muted">Information according to § 5 DDG</p>

        <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
          <p className="font-mono text-sm uppercase tracking-widest text-primary">Notice</p>
          <p className="mt-3 text-pretty leading-relaxed text-muted">
            Tokn is operated on a strictly{" "}
            <span className="font-medium text-text">non-commercial, non-profit basis</span>. No fees
            are charged, no revenue is generated, and no financial compensation of any kind is
            received in connection with this project. It is developed and maintained as a private
            hobby project without any commercial intent.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-6">
          <p className={label}>Contact</p>
          <div className="mt-4 space-y-1 leading-relaxed text-text">
            <p className="font-semibold">Fabian Thomys</p>
            <p>c/o COCENTER</p>
            <p>Koppoldstr. 1</p>
            <p>86551 Aichach</p>
            <p>Germany</p>
          </div>
          <div className="mt-6 border-t border-border pt-6">
            <p className={label}>Email</p>
            <p className="mt-2">
              <RevealEmail className={link} />
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
