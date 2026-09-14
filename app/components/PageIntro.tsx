import Link from "next/link";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="page-intro">
      <Link href="/" className="breadcrumb"><span aria-hidden="true">←</span> Home</Link>
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}
