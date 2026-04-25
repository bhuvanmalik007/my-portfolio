import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { BookOpen } from "lucide-react"

import { meta } from "@/data/meta"
import { cn } from "@/lib/utils"
import { GitHubIcon } from "@/components/icons/github-icon"
import { LinkedInIcon } from "@/components/icons/linkedin-icon"

const pill =
  "inline-flex items-center rounded-full border border-border/70 bg-background/40 px-4 py-2 text-sm font-medium text-foreground/75 backdrop-blur transition hover:bg-accent/40 hover:text-foreground"

export function HeroSection() {
  const [firstName, ...rest] = meta.name.split(" ")
  const lastName = rest.join(" ")

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="select-none font-display text-[26vw] font-extrabold leading-none tracking-tight text-foreground/[0.04]">
          {meta.initials}
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-widest text-muted-foreground">
              {meta.role.toUpperCase()}
            </p>
            <h1 className="mt-4 font-display text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
              {firstName}{" "}
              <span className="text-foreground/90">{lastName}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              <span className="text-foreground">{meta.tagline}</span>{" "}
              {meta.bio}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={meta.socials.github}
                target="_blank"
                rel="noreferrer"
                className={cn(pill, "gap-2")}
              >
                <GitHubIcon className="size-4" />
                GitHub
              </Link>
              <Link
                href={meta.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className={cn(pill, "gap-2")}
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </Link>
              {"medium" in meta.socials && meta.socials.medium ? (
                <Link
                  href={meta.socials.medium}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(pill, "gap-2")}
                >
                  <BookOpen className="size-4" />
                  Medium
                </Link>
              ) : null}
            </div>

            <div className="mt-12">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition hover:text-foreground"
              >
                View my work <ArrowDown className="size-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-[420px]">
              <div className="absolute inset-0 rounded-3xl border border-border/80 bg-background/30 backdrop-blur-sm" />
              <div className="absolute inset-3 overflow-hidden rounded-3xl ring-1 ring-border/60">
                <Image
                  src={meta.photoSrc}
                  alt={`${meta.name} profile photo`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 80vw, 420px"
                />
              </div>
              <div className="pointer-events-none absolute -inset-1 rounded-3xl brand-ring opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
