import { Section } from "./section"

const card =
  "glass rounded-3xl border border-border/70 bg-background/40 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_rgba(0,0,0,0.35)]"

export function AboutSection() {
  return (
    <Section
      id="about"
      title={
        <>
          About
        </>
      }
      subtitle="Senior full-stack engineer with 7 years of professional experience scaling startup products, leading teams, and owning systems end-to-end."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className={card}>
          <h3 className="font-display text-xl font-bold tracking-tight">
            What I Do
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            I build product-grade web applications with strong UX, pragmatic
            architecture, and performance that holds up under real traffic. I’ve
            been a frontend lead, but I’m comfortable shipping backend and
            DevOps work too (CI/CD, cloud, observability).
          </p>
        </div>
        <div className={card}>
          <h3 className="font-display text-xl font-bold tracking-tight">
            Outside Work
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Big sports fan—soccer, tennis, boxing, and UFC. I’m currently
            playing on a soccer team, and I enjoy anything that involves
            competition, teamwork, and steady improvement.
          </p>
        </div>
        <div className={card}>
          <h3 className="font-display text-xl font-bold tracking-tight">
            Education
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground/85">
              University of Florida
            </span>
            <span className="text-muted-foreground">
              {" "}
              — M.S. Computer Science (May 2020)
            </span>
            <br />
            <span className="font-semibold text-foreground/85">
              University of Petroleum &amp; Energy Studies
            </span>
            <span className="text-muted-foreground">
              {" "}
              — B.Tech Computer Science (May 2016)
            </span>
          </p>
        </div>
      </div>
    </Section>
  )
}
