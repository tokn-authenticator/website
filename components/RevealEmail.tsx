"use client";

import { useState } from "react";

const encoded = "Y29udGFjdEBkaWFtb25kZm9yZ2UubWU=";

export function RevealEmail({
  className,
  label = "click to reveal email",
}: {
  className?: string;
  label?: string;
}) {
  const [email, setEmail] = useState<string | null>(null);

  if (email) {
    return (
      <a href={`mailto:${email}`} className={className}>
        {email}
      </a>
    );
  }

  return (
    <button type="button" onClick={() => setEmail(atob(encoded))} className={className}>
      {label}
    </button>
  );
}
