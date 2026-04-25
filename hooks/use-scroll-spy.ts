"use client"

import * as React from "react"

type ScrollSpyOptions = {
  ids: readonly string[]
  rootMargin?: string
  threshold?: number | number[]
  initialId?: string
}

export function useScrollSpy({
  ids,
  rootMargin = "0px 0px -45% 0px",
  threshold = [0.2, 0.35, 0.5, 0.65, 0.8],
  initialId,
}: ScrollSpyOptions) {
  const [activeId, setActiveId] = React.useState<string>(() => {
    return initialId ?? ids[0] ?? ""
  })

  React.useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id
          if (!id) continue
          if (entry.isIntersecting) visible.set(id, entry.intersectionRatio)
          else visible.delete(id)
        }

        if (visible.size === 0) return

        const next = [...visible.entries()].sort((a, b) => b[1] - a[1])[0]?.[0]
        if (next && next !== activeId) setActiveId(next)
      },
      { root: null, rootMargin, threshold }
    )

    for (const el of elements) observer.observe(el)

    return () => observer.disconnect()
  }, [activeId, ids, rootMargin, threshold])

  return activeId
}

