"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const encoded = "Y29udGFjdEBkaWFtb25kZm9yZ2UubWU=";

export function RevealEmail({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  const t = useTranslations("Email");
  const [email, setEmail] = useState<string | null>(null);
  const buttonLabel = label ?? t("reveal");

  if (email) {
    return (
      <a href={`mailto:${email}`} className={className}>
        {email}
      </a>
    );
  }

  return (
    <button type="button" onClick={() => setEmail(atob(encoded))} className={className}>
      {buttonLabel}
    </button>
  );
}
