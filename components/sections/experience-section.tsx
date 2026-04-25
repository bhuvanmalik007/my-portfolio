"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronRight, ExternalLink } from "lucide-react"

import { Section } from "./section"
import { experience, type ExperienceItem } from "@/data/experience"
import { ExperienceModal } from "@/components/experience/experience-modal"

function formatMonthYear(iso: string) {
  const [y, m] = iso.split("-").map(Number)
  if (!y || !m) return iso
  return new Date(y, m - 1, 1).toLocaleString(undefined, {
    month: "short",
    year: "numeric",
  })
}

function formatRange(start: string, end: string | null) {
  const fmt = (iso: string) => {
    return formatMonthYear(iso)
  }
  return `${fmt(start)} — ${end ? fmt(end) : "Present"}`
}

export function ExperienceSection() {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<ExperienceItem | null>(null)

  const onCardClick = (item: ExperienceItem) => {
    setSelected(item)
    setOpen(true)
  }

  return (
    <Section
      id="experience"
      title={
        <>
          Experience
        </>
      }
      subtitle="My professional journey."
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-[color:var(--brand)]/60 sm:left-6"
        />

        <div className="space-y-10">
          {experience.map((item) => {
            const canExpand = item.highlights.length > 2
            const Wrapper = canExpand ? "button" : "div"

            return (
            <Wrapper
              key={`${item.company}-${item.start}`}
              {...(canExpand
                ? {
                    type: "button" as const,
                    onClick: () => onCardClick(item),
                  }
                : {})}
              className="group relative w-full rounded-3xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]/30"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-7 flex size-9 items-center justify-center rounded-full border border-[color:var(--brand)]/50 bg-background/60 backdrop-blur sm:left-2"
              >
                <span className="size-2.5 rounded-full bg-[color:var(--brand)]" />
              </span>

              <div className="glass ml-12 rounded-3xl border border-border/70 bg-background/40 p-7 transition hover:border-border hover:bg-accent/15 sm:ml-16">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-extrabold tracking-tight">
                      {item.role}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      {item.companyUrl ? (
                        <Link
                          href={item.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => {
                            if (canExpand) e.stopPropagation()
                          }}
                          className="inline-flex items-center gap-1 font-semibold text-[color:var(--brand)] hover:underline"
                        >
                          {item.company} <ExternalLink className="size-3.5" />
                        </Link>
                      ) : (
                        <span className="font-semibold text-foreground/80">{item.company}</span>
                      )}
                    </div>
                  </div>

                  <div className="text-sm font-mono text-muted-foreground">
                    {formatRange(item.start, item.end)}
                  </div>
                </div>

                <ul className="mt-6 space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
                  {item.highlights.slice(0, 2).map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[color:var(--brand)]/85" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-border/70 bg-background/35 px-3 py-1 text-xs font-semibold text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {canExpand ? (
                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-foreground/70 transition group-hover:text-foreground">
                      Read more <ChevronRight className="size-4" />
                    </div>
                  ) : null}
                </div>
              </div>
            </Wrapper>
          )})}
        </div>
      </div>

      <ExperienceModal
        open={open}
        item={selected}
        onClose={() => {
          setOpen(false)
          setSelected(null)
        }}
      />
    </Section>
  )
}
