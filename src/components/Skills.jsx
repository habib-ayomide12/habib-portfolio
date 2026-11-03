
const skillGroups = [
  {
    number: "01",
    title: "FRONTEND DEVELOPMENT",
    description: "Building responsive and interactive user interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "BACKEND & SERVICES",
    description: "Working with tools that power modern web applications.",
    skills: ["Firebase", "REST APIs"],
  },
  {
    number: "03",
    title: "TOOLS & WORKFLOW",
    description: "Tools I use to build, manage and ship projects.",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Netlify", "Vercel"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-[#F1EFE9] px-6 py-28 text-[#171717] md:px-16 md:py-36">

      <div className="mx-auto max-w-7xl">

        <div className="mb-20">
          <p className="mb-6 text-xs tracking-[0.3em] text-neutral-500">
            03 / TECHNICAL EXPERTISE
          </p>

          <h2 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            The tools behind
            <br />
            <span className="text-neutral-400">the work.</span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500">
            Technologies and tools I use to transform
            ideas into functional digital experiences.
          </p>
        </div>

        <div className="border-t border-neutral-300">

          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="grid gap-8 border-b border-neutral-300 py-12 md:grid-cols-3 md:gap-12"
            >

              <div>
                <p className="mb-5 text-xs text-neutral-400">
                  {group.number} / EXPERTISE
                </p>

                <h3 className="text-lg font-semibold tracking-tight">
                  {group.title}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-7 text-neutral-500">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-3 md:col-span-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-300 px-5 py-3 text-sm transition duration-300 hover:border-black hover:bg-[#171717] hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 text-xs tracking-widest text-neutral-400">
          <span>ALWAYS LEARNING</span>
          <span>ALWAYS BUILDING</span>
        </div>

      </div>
    </section>
  )
}
