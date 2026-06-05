export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mb-8">
      {eyebrow && (
        <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-gold-600">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-3xl font-bold text-brand-800 sm:text-4xl">
        {title}
      </h1>
      {intro && <p className="mt-3 max-w-2xl text-slate-600">{intro}</p>}
    </header>
  );
}
