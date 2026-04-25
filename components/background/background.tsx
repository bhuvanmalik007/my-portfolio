import { ParticleField } from "./particle-field"

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0">
        <ParticleField />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_20%,rgba(0,0,0,0.06),transparent_55%)] dark:bg-[radial-gradient(1200px_circle_at_50%_20%,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_10%_30%,rgba(0,0,0,0.04),transparent_55%)] dark:bg-[radial-gradient(900px_circle_at_10%_30%,rgba(255,255,255,0.05),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_90%_70%,rgba(0,0,0,0.03),transparent_55%)] dark:bg-[radial-gradient(900px_circle_at_90%_70%,rgba(255,255,255,0.04),transparent_55%)]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)] opacity-55 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.16))] dark:opacity-90 dark:bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.65))]" />
    </div>
  )
}
