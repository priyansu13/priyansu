import { ReactNode } from 'react';
export function Section({ id, eyebrow, title, children, className = '' }: { id: string; eyebrow: string; title: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className}`}><div className="mx-auto max-w-6xl px-6"><p className="eyebrow">{eyebrow}</p><h2 className="mt-3 font-display text-4xl tracking-tight text-ink dark:text-white md:text-5xl">{title}</h2>{children}</div></section>;
}
