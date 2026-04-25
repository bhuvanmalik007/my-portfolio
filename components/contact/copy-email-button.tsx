"use client"

import * as React from "react"
import { Copy, Check } from "lucide-react"

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = React.useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      // ignore (clipboard permissions)
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/35 px-4 py-3 text-sm font-semibold text-foreground/80 backdrop-blur transition hover:bg-accent/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      aria-label="Copy email"
      title={copied ? "Copied" : "Copy"}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
    </button>
  )
}
