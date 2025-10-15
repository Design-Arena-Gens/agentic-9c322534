"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const traversalActions = [
  {
    label: "Web Swing",
    input: "RT · Hold",
    description: "Tap into adaptive momentum for seamless arc transitions.",
    highlight: "Dynamic Tension Feedback"
  },
  {
    label: "Web Line Targeting",
    input: "LT · Aim",
    description: "Intelligent anchor suggestions with predictive pathing overlays.",
    highlight: "Predictive Anchor Assist"
  },
  {
    label: "Point Launch",
    input: "A · Release",
    description: "Time for a precision burst to chain velocity spikes.",
    highlight: "Perfect Launch Timing"
  }
];

const traversalTips = [
  "Hold RT to maintain swing tension; release at 85° for max velocity.",
  "Chain web zips between blue anchors to sustain style meter.",
  "Watch the motion field pulses; red indicates approaching terminal speed."
];

export function TraversalShowcase() {
  return (
    <section className="hud-panel neon-border hud-blur p-6 md:p-8 lg:p-12 flex flex-col gap-8">
      <SectionHeader
        eyebrow="Traversal System"
        title="Fluid Motion & Momentum"
        subtitle="Designed around high-speed traversal with adaptive control surfaces and responsive visual cues that celebrate speed."
      />

      <div className="grid gap-10 xl:grid-cols-[1.5fr_1fr]">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-spidey-red/30 via-black/60 to-spidey-blue/20">
          <motion.div
            className="absolute right-10 top-10 aspect-square w-72 rounded-full bg-spidey-blue/20 blur-3xl"
            animate={{ scale: [1, 1.2, 1.05], opacity: [0.35, 0.55, 0.4] }}
            transition={{ duration: 8, repeat: Infinity }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid gap-6 p-8 text-white">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.4em] text-white/60">Velocity Field</span>
                <span className="font-display text-5xl font-semibold tracking-wide">82 km/h</span>
              </div>
              <div className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.3em]">
                Momentum Sync
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {traversalActions.map((action) => (
                <div key={action.label} className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <div className="flex items-center justify-between text-xs uppercase text-white/60">
                    <span>{action.input}</span>
                    <span className="text-spidey-red/75">{action.highlight}</span>
                  </div>
                  <p className="mt-3 font-semibold text-white">{action.label}</p>
                  <p className="mt-2 text-sm text-white/70">{action.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/45 p-6">
              <div className="flex items-center justify-between">
                <span className="panel-heading text-xs text-spidey-red/80">Web-Line Acquisition</span>
                <span className="text-xs uppercase text-white/60">Adaptive Anchor Net</span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/75">
                <span className="flex items-center gap-2">
                  <span className="flex size-3 rounded-full bg-spidey-blue shadow-neon" aria-hidden="true" />
                  Optimal Anchor
                </span>
                <span className="flex items-center gap-2">
                  <span className="size-3 rounded-full border border-spidey-red bg-transparent" aria-hidden="true" />
                  Hazard Zone
                </span>
                <span className="flex items-center gap-2">
                  <span className="size-3 rounded-full border border-white/25" aria-hidden="true" />
                  Traversal Assist
                </span>
              </div>
              <div className="mt-5 h-48 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-t from-black/60 via-spidey-blue/10 to-black/40">
                <motion.div
                  className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.5),transparent_65%)]"
                  animate={{ scale: [1, 1.1, 0.95, 1.05, 1], opacity: [0.6, 0.75, 0.55, 0.7, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-white/10 bg-black/35 p-6 shadow-neon">
            <div className="flex items-center justify-between text-xs uppercase text-white/60">
              <span className="panel-heading text-spidey-blue/80">Traversal Assist</span>
              <span>Visual Cues</span>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {traversalTips.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <span className="flex size-7 flex-shrink-0 items-center justify-center rounded-full border border-spidey-blue/40 bg-spidey-blue/20 text-xs font-semibold text-white">
                    •
                  </span>
                  <p>{tip}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 via-spidey-red/10 to-black/40 p-6">
            <div className="flex items-center justify-between text-xs uppercase text-white/60">
              <span className="panel-heading text-spidey-red/80">Swing Stability</span>
              <span>Real-time Diagnostics</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 text-white/80">
              <Metric label="G-Force" value="1.8g" status="Optimal" />
              <Metric label="Trajectory Assist" value="On" status="Precision" />
              <Metric label="Altitude Safe Zone" value="89%" status="Secured" />
              <Metric label="Anchor Density" value="High" status="Adaptive" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type MetricProps = {
  label: string;
  value: string;
  status: string;
};

function Metric({ label, value, status }: MetricProps) {
  return (
    <div className="rounded-2xl border border-white/15 bg-black/40 p-4">
      <p className="text-xs uppercase text-white/55">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <p className="text-xs uppercase tracking-[0.25em] text-spidey-blue/70">{status}</p>
    </div>
  );
}
