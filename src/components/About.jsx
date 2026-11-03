
export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F1EFE9] px-6 py-28 text-[#171717] md:px-16 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-16 text-xs tracking-[0.3em] text-neutral-500">
          02 / A LITTLE ABOUT ME
        </p>

        <div className="grid gap-16 md:grid-cols-2">

          <div>
            <h2 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              More than
              <br />
              just writing
              <br />
              <span className="text-neutral-400">code.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">

            <p className="text-lg leading-9 text-neutral-600">
              I'm Habib, a developer who enjoys turning ideas
              into meaningful digital experiences.
            </p>

            <p className="mt-6 text-sm leading-8 text-neutral-500">
              I work with modern web technologies to create
              responsive interfaces and functional applications.
              I believe great digital products should not only
              look good, but also solve real problems and
              provide a seamless experience.
            </p>

            <p className="mt-6 text-sm leading-8 text-neutral-500">
              My journey is driven by curiosity, continuous
              learning, and the desire to build better things
              with every project.
            </p>

            <div className="mt-12 border-t border-neutral-300 pt-8">

              <p className="text-xs tracking-widest text-neutral-400">
                MY APPROACH
              </p>

              <div className="mt-6 grid grid-cols-2 gap-6">

                <div>
                  <h3 className="font-semibold">01. THINK</h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    Understand the problem.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">02. DESIGN</h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    Plan thoughtful solutions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">03. BUILD</h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    Turn ideas into reality.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">04. IMPROVE</h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    Refine every detail.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
