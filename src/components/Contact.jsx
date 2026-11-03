
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#151515] px-6 py-28 text-white md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Get in touch
        </p>

        <h2 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Have an idea?
          <br />
          <span className="text-neutral-500">
            Let's make it happen.
          </span>
        </h2>

        <a
          href="mailto:your@email.com"
          className="mt-12 inline-flex rounded-full bg-white px-8 py-4 text-black transition hover:bg-neutral-300"
        >
          Send me an email ↗
        </a>
      </div>
    </section>
  )
}
