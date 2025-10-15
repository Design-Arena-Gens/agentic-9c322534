"use client";

import { SectionHeader } from "./SectionHeader";
import { gadgets, skillBranches, suits } from "@/lib/data";

export function InventoryModules() {
  return (
    <section className="hud-panel neon-border hud-blur p-6 md:p-8 lg:p-12 flex flex-col gap-10">
      <SectionHeader
        eyebrow="Gear & Upgrades"
        title="Suits · Gadgets · Skill Grid"
        subtitle="Modular inventory surfaces suits, gadgets, and abilities with clarity—optimized for quick comprehension mid-mission."
      />

      <div className="grid gap-10 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-black/35 p-6 shadow-redGlow">
          <header className="flex items-center justify-between">
            <span className="panel-heading text-sm text-spidey-red/80">Signature Suits</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
              Swappable
            </span>
          </header>
          <ul className="mt-6 space-y-4">
            {suits.map((suit) => (
              <li
                key={suit.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 via-black/40 to-spidey-blue/10 p-5 transition"
              >
                <div className="absolute -right-8 top-0 h-32 w-32 rounded-full bg-spidey-red/20 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex flex-col gap-2 text-white">
                  <div className="flex items-center justify-between text-xs uppercase text-white/60">
                    <span>{suit.tier}</span>
                    <span>Defense Matrix</span>
                  </div>
                  <h3 className="text-xl font-semibold">{suit.name}</h3>
                  <p className="text-sm text-white/75">{suit.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {suit.perks.map((perk) => (
                      <span
                        key={perk}
                        className="rounded-full border border-spidey-blue/30 bg-spidey-blue/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-spidey-blue"
                      >
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
            <div className="flex items-center justify-between">
              <span className="panel-heading text-sm text-spidey-red/80">Gadget Loadout</span>
              <span className="text-xs uppercase text-white/60">Quick Deploy</span>
            </div>
            <ul className="mt-5 space-y-3 text-white">
              {gadgets.map((gadget) => (
                <li key={gadget.id} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/35 p-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-spidey-red/40 bg-spidey-red/10 text-sm uppercase text-white">
                    {gadget.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="font-semibold">{gadget.name}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/55">{gadget.status}</p>
                    <div className="h-2 w-40 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-spidey-red to-spidey-blue"
                        style={{ width: `${(gadget.charge / gadget.capacity) * 100}%` }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="text-right text-sm text-white/70">
                    <p>Charge</p>
                    <p className="text-lg font-semibold text-white">
                      {gadget.charge}
                      <span className="text-sm text-white/60">/{gadget.capacity}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/55 via-spidey-blue/10 to-black/40 p-6 text-white">
            <div className="flex items-center justify-between">
              <span className="panel-heading text-sm text-spidey-red/80">Skill Grid</span>
              <span className="text-xs uppercase text-white/65">Progression</span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {skillBranches.map((branch) => (
                <div key={branch.id} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs uppercase text-white/65">{branch.name}</p>
                  <p className="mt-2 text-3xl font-semibold">
                    {branch.unlocked}
                    <span className="text-lg text-white/60">/{branch.total}</span>
                  </p>
                  <p className="mt-3 text-xs text-white/70">{branch.description}</p>
                  <div className="mt-4 h-1.5 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-spidey-blue to-spidey-red"
                      style={{ width: `${(branch.unlocked / branch.total) * 100}%` }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
