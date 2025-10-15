"use client";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <span className="panel-heading text-xs uppercase tracking-[0.4em] text-spidey-red/80">{eyebrow}</span>
      <h2 className="font-display text-3xl font-semibold text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)]">{title}</h2>
      {subtitle ? <p className="text-sm text-slate-300/85 max-w-2xl leading-relaxed">{subtitle}</p> : null}
    </div>
  );
}
