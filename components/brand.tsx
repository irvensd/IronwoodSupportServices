import Link from "next/link";
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Summit Site Services LLC home">
      <svg viewBox="0 0 48 44" aria-hidden="true">
        <path d="M3 36 21 5l10 17 5-8 12 22H3Z" fill="currentColor" />
        <path d="m13 29 8-14 8 14-8-5Z" fill="var(--paper)" />
      </svg>
      <span>
        SUMMIT<small>SITE SERVICES LLC</small>
      </span>
    </Link>
  );
}
