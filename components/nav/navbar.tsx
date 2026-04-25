"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { BookOpen } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { GitHubIcon } from "@/components/icons/github-icon"
import { LinkedInIcon } from "@/components/icons/linkedin-icon"
import { cn } from "@/lib/utils"
import { sections, meta } from "@/data/meta"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

const iconButton =
  "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/40 text-foreground/80 transition hover:bg-accent/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string
  label: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "relative rounded-full px-3 py-2 text-sm font-medium text-foreground/70 transition hover:text-foreground",
        active && "text-foreground",
        active && "ring-1 ring-[color:var(--brand)]/50 bg-[color:var(--brand)]/10"
      )}
    >
      {label}
    </a>
  )
}

function SocialIcons({ className }: { className?: string }) {
  const socials = meta.socials
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socials.github ? (
        <Link className={iconButton} href={socials.github} target="_blank" rel="noreferrer">
          <GitHubIcon className="size-4" />
          <span className="sr-only">GitHub</span>
        </Link>
      ) : null}
      {socials.linkedin ? (
        <Link className={iconButton} href={socials.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon className="size-4" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      ) : null}
      {"medium" in socials && socials.medium ? (
        <Link className={iconButton} href={socials.medium} target="_blank" rel="noreferrer">
          <BookOpen className="size-4" />
          <span className="sr-only">Medium</span>
        </Link>
      ) : null}
    </div>
  )
}

export function Navbar() {
  const ids = sections.map((s) => s.id)
  const activeId = useScrollSpy({ ids, initialId: "hero" })
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <header className="fixed top-4 z-50 w-full px-3">
      <div className="mx-auto max-w-6xl">
        <div className="glass-nav flex items-center justify-between rounded-full px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.45)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.55)]">
          <a href="#hero" className="flex items-baseline pl-1">
            <span className="font-display text-xl font-bold tracking-tight">{meta.name.split(" ")[0]}</span>
            <span
              aria-hidden="true"
              className="ml-[0.10em] inline-block size-[0.34em] rounded-[0.12em] bg-[color:var(--brand)]"
            />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {sections.map((s) => (
              <NavLink key={s.id} href={`#${s.id}`} label={s.label} active={activeId === s.id} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <SocialIcons className="hidden lg:flex" />
            <ThemeToggle />
            <a
              href={meta.resumeUrl}
              download
              className="hidden rounded-full px-4 py-2 text-sm font-semibold text-[color:var(--brand)] transition hover:bg-[color:var(--brand)]/10 md:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              className={cn(iconButton, "md:hidden")}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        data-open={open ? "true" : "false"}
        className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <div
        data-open={open ? "true" : "false"}
        className={cn(
          "fixed inset-x-3 top-4 z-50 origin-top rounded-3xl border border-border bg-background/80 backdrop-blur-md shadow-2xl transition duration-200 md:hidden",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <a href="#hero" className="flex items-baseline" onClick={() => setOpen(false)}>
            <span className="font-display text-lg font-bold tracking-tight">{meta.name.split(" ")[0]}</span>
            <span
              aria-hidden="true"
              className="ml-[0.10em] inline-block size-[0.34em] rounded-[0.12em] bg-[color:var(--brand)]"
            />
          </a>
          <button type="button" className={iconButton} onClick={() => setOpen(false)} aria-label="Close menu">
            <X className="size-4" />
          </button>
        </div>

        <div className="px-4 pb-5">
          <div className="grid gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-base font-medium text-foreground/75 transition hover:bg-accent/50 hover:text-foreground",
                  activeId === s.id && "bg-[color:var(--brand)]/10 text-foreground ring-1 ring-[color:var(--brand)]/40"
                )}
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <SocialIcons />
            <a
              href={meta.resumeUrl}
              download
              className="rounded-full px-4 py-2 text-sm font-semibold text-[color:var(--brand)] transition hover:bg-[color:var(--brand)]/10"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
