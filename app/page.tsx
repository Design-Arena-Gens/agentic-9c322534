import { HUDOverlay } from "@/components/HUDOverlay";
import { InventoryModules } from "@/components/InventoryModules";
import { MissionBoard } from "@/components/MissionBoard";
import { OptionsMenu } from "@/components/OptionsMenu";
import { TraversalShowcase } from "@/components/TraversalShowcase";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col gap-12 px-4 pb-24 pt-20 md:px-8 lg:px-12">
      <div className="absolute inset-x-0 -top-64 h-96 bg-[radial-gradient(circle,rgba(255,31,71,0.2),transparent_60%)] blur-3xl" aria-hidden="true" />
      <div className="absolute inset-x-0 top-32 h-96 bg-[radial-gradient(circle,rgba(0,112,243,0.25),transparent_60%)] blur-3xl" aria-hidden="true" />

      <header className="relative z-10 flex flex-col gap-3 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="panel-heading text-sm text-spidey-red/80">New York City · Earth-1610</p>
            <h1 className="font-display text-5xl font-semibold tracking-wide drop-shadow-[0_1px_18px_rgba(0,0,0,0.5)]">
              Spider-Man Tactical Command Interface
            </h1>
          </div>
          <div className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/65">
            Build 0.9.3 Prototype
          </div>
        </div>
        <p className="max-w-3xl text-sm text-white/75">
          Command center for an open-world Spider-Man experience. Dynamic HUD surfaces mission intelligence, traversal telemetry, modular gear
          selection, mission deployments, and accessibility-first configuration for every hero in the Spider-Verse.
        </p>
      </header>

      <HUDOverlay />
      <TraversalShowcase />
      <InventoryModules />
      <MissionBoard />
      <OptionsMenu />
    </main>
  );
}
