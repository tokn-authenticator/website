export const site = {
  name: "Tokn",
  url: "https://usetokn.app",
  packageId: "me.diamondforge.tokn",
  links: {
    play: "https://play.google.com/store/apps/details?id=me.diamondforge.tokn",
    fdroid: "https://f-droid.org/app/me.diamondforge.tokn",
    github: "https://github.com/fthomys/tokn",
    releases: "https://github.com/fthomys/tokn/releases",
    issues: "https://github.com/fthomys/tokn/issues",
    license: "https://github.com/fthomys/tokn/blob/main/LICENSE",
  },
};

// Structure only. All copy lives in messages/{locale}.json, keyed by `id`.

export type PrincipleIcon = "lock" | "wifi-off" | "shield" | "git";
export const principles: { id: string; icon: PrincipleIcon }[] = [
  { id: "privacy", icon: "shield" },
  { id: "vault", icon: "lock" },
  { id: "offline", icon: "wifi-off" },
  { id: "oss", icon: "git" },
];

// `shot` is the screenshot base name under /public/screens/{theme}/.
export type Feature = { id: string; icon: string; shot: string };
export const features: Feature[] = [
  { id: "vault", icon: "lock-keyhole", shot: "security-enabled" },
  { id: "sync", icon: "refresh-cw", shot: "sync-methods" },
  { id: "backup", icon: "database-backup", shot: "backup-restore" },
  { id: "import", icon: "download", shot: "import-source-picker" },
  { id: "groups", icon: "folder-tree", shot: "vault-home" },
  { id: "material", icon: "palette", shot: "appearance-settings" },
];

// `name` is a brand and stays untranslated; the note is translated.
export type ImportSource = { id: string; name: string };
export const importSources: ImportSource[] = [
  { id: "aegis", name: "Aegis" },
  { id: "twofas", name: "2FAS" },
  { id: "stratum", name: "Stratum" },
  { id: "googleAuth", name: "Google Authenticator" },
  { id: "otpauth", name: "otpauth:// URIs" },
];

export type SecurityPoint = { id: string; icon: "lock" | "fingerprint" | "eye-off" | "file-check" };
export const securityPoints: SecurityPoint[] = [
  { id: "rest", icon: "lock" },
  { id: "unlock", icon: "fingerprint" },
  { id: "screenshot", icon: "eye-off" },
  { id: "standards", icon: "file-check" },
];

export type SyncMethod = { id: string; icon: "wifi" | "radio" | "qr" };
export const syncMethods: SyncMethod[] = [
  { id: "wifi", icon: "wifi" },
  { id: "wifidirect", icon: "radio" },
  { id: "qr", icon: "qr" },
];

// `email: true` marks the answer that contains a {{email}} reveal placeholder.
export type Faq = { id: string; email?: boolean };
export const faqs: Faq[] = [
  { id: "difference" },
  { id: "storage" },
  { id: "importing" },
  { id: "newPhone" },
  { id: "account" },
  { id: "free" },
  { id: "bug", email: true },
];

export type Cell = "yes" | "no" | "partial";

// The homepage table (comparisonApps below) shows six columns to stay
// readable on mobile;
export type ComparisonRow = {
  id: string;
  tokn: Cell;
  aegis: Cell;
  googleAuth: Cell;
  twofas: Cell;
  stratum: Cell;
  authy: Cell;
  microsoftAuth: Cell;
};

export const comparisonApps = ["Tokn", "Aegis", "Google Auth", "Microsoft Auth", "Stratum", "Authy"] as const;

export const comparison: ComparisonRow[] = [
  { id: "oss", tokn: "yes", aegis: "yes", googleAuth: "no", twofas: "yes", stratum: "yes", authy: "no", microsoftAuth: "no" },
  { id: "noCloud", tokn: "yes", aegis: "yes", googleAuth: "partial", twofas: "partial", stratum: "yes", authy: "no", microsoftAuth: "partial" },
  { id: "encryptedVault", tokn: "yes", aegis: "yes", googleAuth: "partial", twofas: "yes", stratum: "yes", authy: "partial", microsoftAuth: "partial" },
  { id: "biometric", tokn: "yes", aegis: "yes", googleAuth: "yes", twofas: "yes", stratum: "yes", authy: "yes", microsoftAuth: "yes" },
  { id: "noGms", tokn: "yes", aegis: "yes", googleAuth: "no", twofas: "partial", stratum: "yes", authy: "no", microsoftAuth: "no" },
  { id: "localSync", tokn: "yes", aegis: "no", googleAuth: "no", twofas: "no", stratum: "no", authy: "no", microsoftAuth: "no" },
  { id: "backups", tokn: "yes", aegis: "yes", googleAuth: "no", twofas: "yes", stratum: "yes", authy: "no", microsoftAuth: "no" },
  { id: "import", tokn: "yes", aegis: "yes", googleAuth: "no", twofas: "yes", stratum: "yes", authy: "no", microsoftAuth: "no" },
  { id: "customIcons", tokn: "yes", aegis: "yes", googleAuth: "no", twofas: "yes", stratum: "yes", authy: "partial", microsoftAuth: "no" },
  { id: "groups", tokn: "yes", aegis: "yes", googleAuth: "no", twofas: "yes", stratum: "yes", authy: "no", microsoftAuth: "no" },
  { id: "materialYou", tokn: "yes", aegis: "yes", googleAuth: "yes", twofas: "partial", stratum: "partial", authy: "no", microsoftAuth: "no" },
];

export type CompetitorKey = Exclude<keyof ComparisonRow, "id" | "tokn">;
export type Competitor = { slug: string; key: CompetitorKey; name: string };
export const competitors: Competitor[] = [
  { slug: "aegis", key: "aegis", name: "Aegis" },
  { slug: "google-authenticator", key: "googleAuth", name: "Google Authenticator" },
  { slug: "2fas", key: "twofas", name: "2FAS" },
  { slug: "stratum", key: "stratum", name: "Stratum" },
  { slug: "authy", key: "authy", name: "Authy" },
  { slug: "microsoft-authenticator", key: "microsoftAuth", name: "Microsoft Authenticator" },
];

export const worksWith: string[] = [
  "siGoogle",
  "siGithub",
  "siGitlab",
  "siDiscord",
  "siReddit",
  "siTwitch",
  "siDropbox",
  "siCloudflare",
  "siProton",
  "siNotion",
];
