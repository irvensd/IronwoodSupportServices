import Link from "next/link";
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Ironwood Support Services home">
      <svg viewBox="0 0 48 44" aria-hidden="true">
        <path
          d="M24 2 8 22h6L6 34h14v8h8v-8h14L34 22h6L24 2Z"
          fill="currentColor"
        />
        <path
          d="M24 10 16 22h4l-5 8h18l-5-8h4L24 10Z"
          fill="var(--paper)"
        />
      </svg>
      <span>
        IRONWOOD<small>SUPPORT SERVICES</small>
      </span>
    </Link>
  );
}
