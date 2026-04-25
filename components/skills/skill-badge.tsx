/* eslint-disable @next/next/no-img-element */

"use client"

import { cn } from "@/lib/utils"

import type { SkillItem } from "@/data/skills"

function iconUrl(icon: string, color?: string) {
  const slug = icon.trim().toLowerCase()
  const c = color?.replace("#", "").trim()
  return c ? `https://cdn.simpleicons.org/${slug}/${c}` : `https://cdn.simpleicons.org/${slug}`
}

export function SkillBadge({ item }: { item: SkillItem }) {
  return (
    <div
      className={cn(
        "group inline-flex items-center gap-3 rounded-xl border border-border/70 bg-background/35 px-4 py-3 backdrop-blur transition will-change-transform hover:scale-[1.03] hover:border-border hover:bg-accent/20"
      )}
    >
      {item.icon ? (
        <img
          src={iconUrl(item.icon, item.color)}
          alt=""
          width={20}
          height={20}
          loading="lazy"
          className="h-5 w-5 opacity-85 transition group-hover:opacity-100 dark:grayscale-[0.15]"
          onError={(e) => {
            e.currentTarget.style.display = "none"
          }}
        />
      ) : null}
      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground">
        {item.name}
      </span>
    </div>
  )
}
