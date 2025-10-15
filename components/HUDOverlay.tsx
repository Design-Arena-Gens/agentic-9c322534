"use client";

import { motion } from "framer-motion";
import { missionObjectives, nearbyActivities, traversalStats } from "@/lib/data";

export function HUDOverlay() {
  return (
    <section aria-labelledby="hud-title" className="hud-panel hud-blur neon-border p-6 md:p-8 lg:p-10 flex flex-col gap-8">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="panel-heading text-xs text-spidey-blue/80">Mission Briefing</span>
          <h1 id="hud-title" className="font-display text-4xl font-semibold text-white">
            Oscorp Convoy Intercept
          </h1>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/80">
          <span className="flex size-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" aria-hidden="true" />
          Live Ops Feed
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] xl:gap-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h2 className="panel-heading text-sm text-spidey-red/80">Contextual Objectives</h2>
          <ul className="mt-4 grid gap-4">
            {missionObjectives.map((objective, index) => (
              <li
                key={objective.title}
                className="rounded-2xl border border-white/5 bg-black/25 p-4 transition hover:border-spidey-red/60"
              >
                <div className="flex items-center justify-between gap-4 text-white">
                  <p className="text-base font-semibold">{objective.title}</p>
                  <span className="text-sm text-white/65">{objective.progress}%</span>
                </div>
                <p className="mt-2 text-sm text-slate-300/85">{objective.detail}</p>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${objective.progress}%` }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-spidey-red via-spidey-red/80 to-spidey-blue shadow-redGlow"
                    aria-hidden="true"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h2 className="panel-heading text-sm text-spidey-red/80">Nearby Activity</h2>
            <ul className="mt-4 space-y-3">
              {nearbyActivities.map((activity) => (
                <li
                  key={activity.id}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white/5 bg-black/25 px-4 py-3"
                >
                  <div>
                    <p className="font-semibold text-white">{activity.label}</p>
                    <p className="text-xs uppercase tracking-wide text-white/55">{activity.distance}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-spidey-blue/20 px-3 py-1 text-xs font-semibold uppercase text-spidey-blue">
                    {activity.risk}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-spidey-blue/10 p-6 shadow-neon backdrop-blur-md">
            <h2 className="panel-heading text-sm text-spidey-red/80">Swing Telemetry</h2>
            <div className="mt-4 grid gap-5">
              <TelemetryGauge label="Velocity" unit="km/h" metric={traversalStats.velocity} />
              <TelemetryGauge label="Altitude" unit="m" metric={traversalStats.altitude} />

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="flex items-center justify-between text-xs uppercase text-white/65">
                  <span className="panel-heading text-[11px] tracking-[0.35em] text-spidey-blue/80">Combo Chain</span>
                  <span>Momentum Transfer</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {traversalStats.styleChain.map((entry, idx) => (
                    <li key={entry.label} className="flex items-center gap-3">
                      <span className="text-xs uppercase text-white/65">{idx + 1}</span>
                      <p className="flex-1 text-sm text-white">{entry.label}</p>
                      <div className="h-1.5 w-32 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${entry.intensity * 100}%` }}
                          transition={{ duration: 1.1, delay: idx * 0.15 }}
                          className="h-full rounded-full bg-gradient-to-r from-spidey-blue to-spidey-red"
                          aria-hidden="true"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-spidey-blue/25 bg-black/30 px-5 py-4 text-sm text-white/85">
                <div>
                  <p className="text-xs uppercase text-spidey-blue/80">Target Lock</p>
                  <p className="mt-1 font-semibold text-white">
                    {traversalStats.targeting.target} · {traversalStats.targeting.distance}
                  </p>
                </div>
                <motion.span
                  animate={{ scale: traversalStats.targeting.locked ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className={`flex size-12 items-center justify-center rounded-full border-2 ${
                    traversalStats.targeting.locked ? "border-spidey-red bg-spidey-red/30 text-white" : "border-white/20 text-white/60"
                  }`}
                  role="status"
                  aria-live="polite"
                  aria-label={traversalStats.targeting.locked ? "Target locked" : "No target"}
                >
                  {traversalStats.targeting.locked ? "LOCK" : "SCAN"}
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type GaugeProps = {
  label: string;
  unit: string;
  metric: { current: number; max: number };
};

function TelemetryGauge({ label, unit, metric }: GaugeProps) {
  const ratio = Math.min(metric.current / metric.max, 1);
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white">
      <div className="flex items-center justify-between text-xs uppercase text-white/60">
        <span className="panel-heading text-[11px] tracking-[0.35em] text-spidey-blue/80">{label}</span>
        <span>
          {metric.current} / {metric.max} {unit}
        </span>
      </div>
      <div className="mt-3 h-16 rounded-2xl bg-gradient-to-br from-spidey-blue/20 via-black/60 to-spidey-red/10 p-3">
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-semibold text-white">{metric.current}</span>
          </div>
          <motion.div
            className="relative flex size-full items-center justify-center"
            initial={{ rotate: -90 }}
            animate={{ rotate: ratio * 180 - 90 }}
            transition={{ type: "spring", stiffness: 110, damping: 18 }}
          >
            <div className="absolute -bottom-1 h-2 w-16 rounded-full bg-gradient-to-r from-spidey-red to-spidey-blue shadow-redGlow" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
