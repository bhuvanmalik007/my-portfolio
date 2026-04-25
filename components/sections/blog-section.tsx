import { Section } from "./section"

export function BlogSection() {
  return (
    <Section
      id="blog"
      title={
        <>
          Blog<span className="brand-text">.</span>
        </>
      }
      subtitle="Writing is coming soon—short notes on frontend engineering, UX, and performance."
    >
      <div className="glass rounded-3xl border border-border/70 bg-background/40 p-8 text-sm text-muted-foreground">
        No posts yet.
      </div>
    </Section>
  )
}

