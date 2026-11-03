
const projects = [
  {
    number: "01",
    category: "PROPERTY TECHNOLOGY",
    title: "StayFinder",
    description:
      "A modern property discovery platform that helps users explore rental listings, filter by price and location, and save their favourite properties.",
    type: "PROPERTY PLATFORM",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
  },
]

export default function Projects() {
  return (
    <section id="work" className="bg-[#f1efe9] px-6 py-28 md:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-neutral-500">
              Selected projects
            </p>

            <h2 className="text-5xl font-semibold tracking-tight text-neutral-900 md:text-7xl">
              Things I've built<span className="text-neutral-400">.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-7 text-neutral-500">
            A selection of projects built through curiosity, creativity and code.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-16">
          {projects.map((project) => (
            <article key={project.number} className="group">

              {/* Project preview */}
              <div className="relative overflow-hidden rounded-2xl bg-[#dedbd3] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">

                {/* Browser header */}
                <div className="relative z-10 flex items-center justify-between border-b border-black/10 bg-white/80 px-5 py-4">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>

                  <p className="text-xs text-neutral-500">
                    stayfinder.app
                  </p>

                  <span className="text-xs text-neutral-400">
                    ↗
                  </span>
                </div>

                {/* Property image */}
                <div className="relative h-[300px] overflow-hidden sm:h-[450px]">
                  <img
                    src={project.image}
                    alt="Modern luxury property featured in StayFinder"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/0" />

                  <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-5 py-2 text-xs font-medium text-neutral-900 backdrop-blur-md">
                    Property discovery platform
                  </div>
                </div>
              </div>

              {/* Project information */}
              <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-start">

                <div className="max-w-2xl">
                  <div className="mb-4 flex items-center gap-4 text-xs uppercase tracking-widest text-neutral-500">
                    <span>{project.number}</span>
                    <span>•</span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="mb-4 text-4xl font-semibold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-neutral-500 md:text-5xl">
                    {project.title}
                    <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                      ↗
                    </span>
                  </h3>

                  <p className="max-w-xl text-base leading-8 text-neutral-600">
                    {project.description}
                  </p>
                </div>

                <div className="md:min-w-[220px]">
                  <p className="mb-4 text-xs uppercase tracking-widest text-neutral-400">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-neutral-300 px-4 py-2 text-xs text-neutral-700 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <p className="mt-8 text-xs uppercase tracking-widest text-neutral-400">
                    {project.type} / {project.year}
                  </p>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
