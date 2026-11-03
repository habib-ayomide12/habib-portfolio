
export default function Footer() {
  return (
    <footer className="bg-[#151515] border-t border-white/10 px-6 py-8 text-white md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <a href="#" className="text-xl font-bold tracking-tight">
          HABIB<span className="text-neutral-500">.</span>
        </a>

        <p className="text-sm text-neutral-500">
          Designed & built with intention.
        </p>

        <a
          href="#"
          className="text-sm text-neutral-400 transition hover:text-white"
        >
          Back to top ↑
        </a>
      </div>

      <div className="mx-auto mt-8 max-w-7xl text-xs text-neutral-600">
        © {new Date().getFullYear()} Habib. All rights reserved.
      </div>
    </footer>
  )
}
