import Link from "next/link"
import { Mail } from "lucide-react"

import { Section } from "./section"
import { meta } from "@/data/meta"
import { CopyEmailButton } from "@/components/contact/copy-email-button"

export function ContactSection() {
  return (
    <Section
      id="contact"
      title={
        <>
          Contact
        </>
      }
      subtitle="Want to work together? Reach out and I’ll respond quickly."
    >
      <div className="glass mx-auto max-w-3xl rounded-3xl border border-border/70 bg-background/40 p-10 text-center">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Email is the fastest way to reach me.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`mailto:${meta.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand)]/15 px-6 py-3 text-sm font-semibold text-[color:var(--brand)] ring-1 ring-[color:var(--brand)]/30 transition hover:bg-[color:var(--brand)]/20"
          >
            <Mail className="size-4" /> {meta.email}
          </Link>
          <CopyEmailButton email={meta.email} />
        </div>
      </div>
    </Section>
  )
}
