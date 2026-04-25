"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion/reveal"

export function Section({
  id,
  title,
  subtitle,
  align = "center",
  children,
}: {
  id: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: "center" | "left"
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <header className={cn("mx-auto max-w-4xl", align === "left" && "mx-0")}>
            <h2
              className={cn(
                "font-display text-5xl font-extrabold tracking-tight sm:text-6xl",
                align === "left" ? "text-left" : "text-center"
              )}
            >
              {title}
            </h2>
            {subtitle ? (
              <p
                className={cn(
                  "mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl",
                  align === "left" ? "text-left" : "text-center"
                )}
              >
                {subtitle}
              </p>
            ) : null}
          </header>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="mt-14">{children}</div>
        </Reveal>
      </div>
    </section>
  )
}
