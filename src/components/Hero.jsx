
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#151515] px-6 text-white md:px-16">

      {/* Background glow */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-neutral-700/20 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl pt-24">

        <div className="mb-10 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
            Available for opportunities
          </p>
        </div>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-8xl">
          I build digital
          <br />
          experiences that
          <br />
          <span className="text-neutral-500">make an impact.</span>
        </h1>

        <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">

          <p className="max-w-md text-base leading-8 text-neutral-400">
            I'm Habib, a developer passionate about building
            thoughtful, functional and beautiful digital experiences.
            Turning ideas into meaningful products through code.
          </p>

          <a
            href="#work"
            className="group flex w-fit items-center gap-5 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-neutral-300"
          >
            Explore my work
            <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>

        </div>

        <div className="mt-24 flex flex-wrap justify-between gap-5 border-t border-white/10 pt-6 text-xs uppercase tracking-widest text-neutral-500">
          <span>React Developer</span>
          <span>JavaScript</span>
          <span>UI Development</span>
          <span>Based in Nigeria</span>
        </div>

      </div>
    </section>
  )
}
