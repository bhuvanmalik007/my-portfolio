/* eslint-disable @next/next/no-img-element */

"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export function BrandIcon({
  name,
  className,
}: {
  name: "github" | "linkedin" | "medium"
  className?: string
}) {
  const { resolvedTheme } = useTheme()
  const [broken, setBroken] = React.useState(false)

  const color = resolvedTheme === "dark" ? "ffffff" : "111111"
  const src = `https://cdn.simpleicons.org/${name}/${color}`

  if (broken) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex size-4 items-center justify-center rounded-sm bg-foreground/10 text-[10px] font-bold text-foreground/80",
          className
        )}
      >
        {name === "linkedin" ? "in" : name[0]?.toUpperCase()}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt=""
      width={16}
      height={16}
      loading="lazy"
      className={cn("size-4 opacity-90", className)}
      onError={() => setBroken(true)}
    />
  )
}
