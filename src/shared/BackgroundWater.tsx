export function BackgroundWater() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(0,123,255,0.10),transparent_55%),radial-gradient(55%_50%_at_0%_40%,rgba(25,181,254,0.10),transparent_60%),radial-gradient(50%_50%_at_100%_35%,rgba(0,27,91,0.04),transparent_55%)]" />
      <div className="absolute -top-44 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(circle_at_50%_50%,rgba(25,181,254,0.10),transparent_60%)] blur-3xl" />
      <div className="absolute bottom-[-260px] left-1/2 h-[560px] w-[1200px] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.08),transparent_60%)] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-[420px] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <div className="absolute inset-0 water-waves" />
      </div>
    </div>
  )
}
