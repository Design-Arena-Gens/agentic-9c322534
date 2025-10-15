"use client";

import { missions } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function MissionBoard() {
  return (
    <section className="hud-panel neon-border hud-blur p-6 md:p-8 lg:p-12 flex flex-col gap-10">
      <SectionHeader
        eyebrow="Mission Network"
        title="City-Wide Operations"
        subtitle="Select missions with cinematic art direction, difficulty cues, and tangible rewards to motivate exploration."
      />

      <div className="grid gap-6 xl:grid-cols-3">
        {missions.map((mission) => (
          <article
            key={mission.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/40 transition hover:border-spidey-red/60"
          >
            <div
              className="relative h-48 w-full"
              style={{
                backgroundImage: `linear-gradient(135deg, ${mission.palette[0]}, ${mission.palette[1]})`
              }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_55%)] mix-blend-screen opacity-70" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.6),transparent_60%)]" />
              <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase text-white/70">
                Difficulty {mission.difficulty}/5
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6 text-white">
              <div className="flex items-center justify-between text-xs uppercase text-white/60">
                <span className="panel-heading text-spidey-blue/80">Main Operation</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">Reward Focus</span>
              </div>
              <h3 className="text-xl font-semibold">{mission.title}</h3>
              <p className="text-sm text-white/75">{mission.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/55">
                {mission.rewards.map((reward) => (
                  <span
                    key={reward}
                    className="rounded-full border border-spidey-blue/40 bg-spidey-blue/10 px-3 py-1 text-[11px] text-white/80"
                  >
                    {reward}
                  </span>
                ))}
              </div>
              <button className="mt-4 rounded-2xl border border-spidey-red/50 bg-gradient-to-r from-spidey-red/80 to-spidey-blue/60 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-redGlow transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-spidey-red">
                Engage Mission
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
