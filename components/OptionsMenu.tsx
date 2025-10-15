"use client";

import { SectionHeader } from "./SectionHeader";
import { optionsCategories } from "@/lib/data";

export function OptionsMenu() {
  return (
    <section className="hud-panel neon-border hud-blur p-6 md:p-8 lg:p-12 flex flex-col gap-10">
      <SectionHeader
        eyebrow="Options & Accessibility"
        title="Adaptive Settings Matrix"
        subtitle="Responsive settings with rich descriptions, optimized for accessibility and quick adjustments before or during missions."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {optionsCategories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 via-spidey-blue/10 to-black/45 p-6 text-white"
          >
            <div className="flex items-center justify-between">
              <span className="panel-heading text-sm text-spidey-red/80">{category.name}</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
                Adaptive
              </span>
            </div>
            <ul className="space-y-4">
              {category.options.map((option) => (
                <li key={option.label} className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">{option.label}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/55">{option.type}</p>
                    </div>
                    <span className="rounded-xl border border-spidey-blue/30 bg-spidey-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-spidey-blue">
                      {option.value}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-white/75">{option.description}</p>
                  <button className="mt-4 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-spidey-red/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-spidey-blue">
                    Adjust
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/15 bg-black/45 p-6 text-white shadow-neon">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="panel-heading text-sm text-spidey-red/80">Accessibility Quick Actions</h3>
            <p className="mt-2 max-w-3xl text-sm text-white/75">
              Toggle subtitle presets, select colorblind filters, and activate traversal assistance without leaving the mission flow. Built for
              controller, keyboard, and screen reader parity.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-xl border border-spidey-red/50 bg-spidey-red/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-redGlow transition hover:bg-spidey-red/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-spidey-red">
              Subtitle Presets
            </button>
            <button className="rounded-xl border border-spidey-blue/50 bg-spidey-blue/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-neon transition hover:bg-spidey-blue/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-spidey-blue">
              Colorblind Modes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
