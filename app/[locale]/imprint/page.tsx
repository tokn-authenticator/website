import type { Metadata } from "next";
import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BrandMark } from "@/components/BrandMark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { RevealEmail } from "@/components/RevealEmail";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return {
    title: t("imprintTitle"),
    description: t("imprintDescription"),
    robots: { index: false },
  };
}

const link = "font-medium text-primary underline-offset-4 hover:underline";
const label = "font-mono text-sm uppercase tracking-widest text-muted";

export default function Imprint({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("Imprint");
  const nav = useTranslations("Nav");
  const common = useTranslations("Common");

  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label={nav("home")}>
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
          <ArrowLeft className="h-4 w-4" /> {common("backHome")}
        </Link>

        <h1 className="mt-6 text-balance text-4xl font-bold">{t("title")}</h1>
        <p className="mt-3 font-mono text-sm text-muted">{t("law")}</p>

        <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
          <p className="font-mono text-sm uppercase tracking-widest text-primary">{t("noticeLabel")}</p>
          <p className="mt-3 text-pretty leading-relaxed text-muted">
            {t("noticePre")}
            <span className="font-medium text-text">{t("noticeStrong")}</span>
            {t("noticePost")}
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-6">
          <p className={label}>{t("contactLabel")}</p>
          <div className="mt-4 space-y-1 leading-relaxed text-text">
            <p className="font-semibold">Fabian Thomys</p>
            <p>c/o COCENTER</p>
            <p>Koppoldstr. 1</p>
            <p>86551 Aichach</p>
            <p>Germany</p>
          </div>
          <div className="mt-6 border-t border-border pt-6">
            <p className={label}>{t("emailLabel")}</p>
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
