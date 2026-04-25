import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Section } from "./section"

const card =
  "glass rounded-3xl border border-border/70 bg-background/40 p-7 transition hover:border-border hover:bg-accent/15"

const tag =
  "inline-flex items-center rounded-full border border-border/70 bg-background/30 px-3 py-1 text-xs font-semibold text-foreground/70"

const projects = [
  {
    title: "Form Builder Platform",
    desc: "No-code dynamic forms with conditional logic, validations, and dashboards.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    title: "Trading Terminal UI",
    desc: "Real-time charts, WebSocket streaming, and fast interaction patterns.",
    stack: ["React", "TypeScript", "WebSockets"],
    href: "#",
  },
  {
    title: "Design System",
    desc: "Reusable primitives and patterns for consistent, scalable product UI.",
    stack: ["Radix", "Tailwind", "Accessibility"],
    href: "#",
  },
]

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title={
        <>
          Projects<span className="brand-text">.</span>
        </>
      }
      subtitle="A few things I’ve shipped—focused on product impact and frontend engineering depth."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className={card}>
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-bold tracking-tight">
                {p.title}
              </h3>
              <Link
                href={p.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/30 text-foreground/80 transition hover:bg-accent/50 hover:text-foreground"
              >
                <ExternalLink className="size-4" />
                <span className="sr-only">Open</span>
              </Link>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.desc}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className={tag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

