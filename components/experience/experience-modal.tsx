"use client"

import * as React from "react"
import Link from "next/link"
import { X } from "lucide-react"

import type { ExperienceItem } from "@/data/experience"
import { cn } from "@/lib/utils"

function formatDate(iso: string) {
  const [y, m] = iso.split("-").map(Number)
  if (!y || !m) return iso
  return new Date(y, m - 1, 1).toLocaleString(undefined, {
    month: "short",
    year: "numeric",
  })
}

export function ExperienceModal({
  open,
  item,
  onClose,
}: {
  open: boolean
  item: ExperienceItem | null
  onClose: () => void
}) {
  const ref = React.useRef<HTMLDialogElement | null>(null)

  React.useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const onCancel = (e: Event) => {
      e.preventDefault()
      onClose()
    }
    dialog.addEventListener("cancel", onCancel)
    return () => dialog.removeEventListener("cancel", onCancel)
  }, [onClose])

  React.useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  if (!item) return <dialog ref={ref} />

  const start = formatDate(item.start)
  const end = item.end ? formatDate(item.end) : "Present"

  return (
    <dialog
      ref={ref}
      className={cn(
        "fixed inset-0 m-auto w-[min(820px,calc(100vw-2rem))] rounded-3xl border border-border bg-background/90 p-0 text-foreground shadow-2xl backdrop:backdrop-blur-sm backdrop:bg-background/60"
      )}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      onClose={onClose}
    >
      <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-5">
        <div>
          <p className="text-sm font-semibold text-muted-foreground">
            {start} — {end}
          </p>
          <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">
            {item.role}
          </h3>
          <div className="mt-2 text-sm text-foreground/80">
            {item.companyUrl ? (
              <Link
                href={item.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[color:var(--brand)] hover:underline"
              >
                {item.company}
              </Link>
            ) : (
              <span className="font-semibold">{item.company}</span>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/40 transition hover:bg-accent/50"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
        <h4 className="font-display text-base font-bold">Highlights</h4>
        <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-foreground/70">
          {item.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[color:var(--brand)]/85" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <h4 className="font-display text-base font-bold">Stack</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.stack.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-border/70 bg-background/35 px-3 py-1 text-xs font-semibold text-foreground/75"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  )
}
