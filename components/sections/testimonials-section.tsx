import { Section } from "./section"

export function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      title={
        <>
          Testimonials<span className="brand-text">.</span>
        </>
      }
      subtitle="A few words from people I’ve worked with (placeholder)."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {["Clear communicator", "Strong ownership", "Great product sense"].map((t) => (
          <div
            key={t}
            className="glass rounded-3xl border border-border/70 bg-background/40 p-7 text-sm text-muted-foreground"
          >
            “{t}”
          </div>
        ))}
      </div>
    </Section>
  )
}

