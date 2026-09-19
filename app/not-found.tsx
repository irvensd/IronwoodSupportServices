import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container section">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>Let’s get you back on site.</h1>
      <p className="my-6">The page you’re looking for isn’t here.</p>
      <Link href="/" className="button button-green">
        Return home
      </Link>
    </div>
  );
}
