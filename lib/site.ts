export const site = {
  name: "Tokn",
  tagline: "Your 2FA codes. Offline.",
  url: "https://usetokn.app",
  description:
    "Tokn is a free, open-source 2FA authenticator for Android. Your one-time codes stay on your device, encrypted. No accounts, no cloud, no analytics.",
  packageId: "me.diamondforge.tokn",
  links: {
    play: "https://play.google.com/store/apps/details?id=me.diamondforge.tokn",
    fdroid: "https://f-droid.org/app/me.diamondforge.tokn",
    github: "https://github.com/fthomys/tokn",
    releases: "https://github.com/fthomys/tokn/releases",
    issues: "https://github.com/fthomys/tokn/issues",
    license: "https://github.com/fthomys/tokn/blob/main/LICENSE",
    email: "mailto:contact@diamondforge.me",
  },
};

export type Principle = {
  title: string;
  text: string;
  icon: "lock" | "wifi-off" | "shield" | "git";
};

export const principles: Principle[] = [
  {
    title: "Private by design",
    text: "No sign-up, zero telemetry, and no Google Play Services on your device.",
    icon: "shield",
  },
  {
    title: "Encrypted vault",
    text: "Stored in an SQLCipher database, unlocked with biometrics or a password.",
    icon: "lock",
  },
  {
    title: "Fully offline",
    text: "Codes are generated locally on your phone. Nothing is sent anywhere.",
    icon: "wifi-off",
  },
  {
    title: "Open source",
    text: "GPL-3.0, source on GitHub, and published on F-Droid.",
    icon: "git",
  },
];

export type Feature = {
  title: string;
  text: string;
  icon: string;
  shot?: { src: string; alt: string };
};

export const features: Feature[] = [
  {
    title: "Encrypted vault",
    text: "Your tokens live in an SQLCipher database. Unlock with a fingerprint, your face, or a password.",
    icon: "lock-keyhole",
    shot: { src: "/screens/security-enabled.png", alt: "Security settings with vault encryption and biometrics enabled" },
  },
  {
    title: "Device-to-device sync",
    text: "Move accounts to a new phone over local Wi-Fi, Wi-Fi Direct, or an animated QR code. The handshake is end-to-end encrypted and never leaves your network.",
    icon: "refresh-cw",
    shot: { src: "/screens/sync-methods.png", alt: "Choosing a sync method: Wi-Fi, Wi-Fi Direct, or QR code" },
  },
  {
    title: "Backup and restore",
    text: "Encrypted backups for migrating phones or just keeping a copy you control.",
    icon: "database-backup",
    shot: { src: "/screens/backup-restore.png", alt: "Backup and restore screen" },
  },
  {
    title: "Import from anywhere",
    text: "Bring accounts over from Aegis, 2FAS, Google Authenticator, or any otpauth URI.",
    icon: "download",
    shot: { src: "/screens/import-source-picker.png", alt: "Picking an import source" },
  },
  {
    title: "Organize with groups",
    text: "Sort accounts into custom groups, more than one per account, and order the list your way.",
    icon: "folder-tree",
    shot: { src: "/screens/vault-home.png", alt: "Vault home with grouped accounts and live codes" },
  },
  {
    title: "Material You",
    text: "Material 3 design with light, dark, or system themes and optional dynamic color.",
    icon: "palette",
    shot: { src: "/screens/appearance-settings.png", alt: "Appearance settings with theme options" },
  },
];

export type ImportSource = { name: string; note: string };

export const importSources: ImportSource[] = [
  { name: "Aegis", note: "Encrypted backups" },
  { name: "2FAS", note: "Backups" },
  { name: "Google Authenticator", note: "Export QR codes" },
  { name: "otpauth:// URIs", note: "Any standard token" },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How is Tokn different from Google Authenticator or Aegis?",
    a: "Against Google Authenticator the gap is wide: your codes sit in an encrypted vault behind biometrics or a password instead of being on screen the second you open the app, it is open source, runs without Google Play Services, and you can export, back up, and move your accounts yourself. Aegis is a close cousin, also open source, encrypted, and offline. What Tokn adds is moving accounts to a new phone without a server, over local Wi-Fi, Wi-Fi Direct, or an animated QR code.",
  },
  {
    q: "Where are my codes stored?",
    a: "Only on your device, inside an SQLCipher-encrypted database. There is no account and no server. Codes are generated locally per RFC 6238 (TOTP) and RFC 4226 (HOTP), with SHA-1, SHA-256, and SHA-512 support.",
  },
  {
    q: "I am switching from another app. Will my accounts come over?",
    a: "Yes. Tokn imports from Aegis, 2FAS, Google Authenticator, and standard otpauth:// URIs. Load an encrypted backup or export from one of those apps, scan a QR code with the camera, pick a QR image from your gallery, or type a secret in by hand.",
  },
  {
    q: "How do I move to a new phone?",
    a: "Two ways. Use an encrypted backup file, or sync device to device over local Wi-Fi, Wi-Fi Direct, or an animated QR code. The sync handshake is end-to-end encrypted and nothing leaves the local network.",
  },
  {
    q: "Does Tokn need an account or internet access?",
    a: "Neither. Tokn works fully offline. The optional internet permission is only used if you opt in to fetching service icons, and it is disabled by default.",
  },
  {
    q: "Is it really free, and can I help?",
    a: "Tokn is free software under the GPL-3.0. The code, releases, and issue tracker are on GitHub. Feature ideas, bug reports, and pull requests are all welcome.",
  },
  {
    q: "Where can I report a bug?",
    a: "Open an issue on the GitHub issue tracker at github.com/fthomys/tokn/issues. Include your Android version, how to reproduce it, and what you expected to happen. If you would rather not use GitHub, email contact@diamondforge.me instead.",
  },
];


export const worksWith: string[] = [
  "siGoogle",
  "siGithub",
  "siGitlab",
  "siDiscord",
  "siReddit",
  "siTwitch",
  "siDropbox",
  "siPaypal",
  "siCloudflare",
  "siProton",
  "siSteam",
  "siNotion",
];
