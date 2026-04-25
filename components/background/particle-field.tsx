"use client"

import * as React from "react"

type Particle = {
  x: number
  y: number
  r: number
  a: number
  vx: number
  vy: number
}

function parseRgb(color: string) {
  const s = color.trim()
  if (s.startsWith("#")) {
    const hex = s.slice(1)
    const normalized =
      hex.length === 3
        ? hex
            .split("")
            .map((c) => c + c)
            .join("")
        : hex
    const num = Number.parseInt(normalized, 16)
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 }
  }

  const m = s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (m) return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]) }
  return { r: 255, g: 255, b: 255 }
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return true
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function ParticleField({ count = 70 }: { count?: number }) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const rafRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particles: Particle[] = []
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    let width = 0
    let height = 0
    let isDark = document.documentElement.classList.contains("dark")
    let color = { r: 255, g: 255, b: 255 }

    const updateColor = () => {
      isDark = document.documentElement.classList.contains("dark")
      const root = getComputedStyle(document.documentElement)
      const fg = root.getPropertyValue("--foreground") || (isDark ? "#f5f5f5" : "#0a0a0a")
      color = parseRgb(fg)
    }

    const resize = () => {
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const spawn = () => {
      particles.length = 0
      const n = Math.max(10, Math.min(180, count))
      for (let i = 0; i < n; i += 1) {
        const r = Math.random() * 2.2 + 0.6
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r,
          a: Math.random() * 0.55 + 0.15,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
        })
      }
    }

    updateColor()
    resize()
    spawn()

    const onResize = () => {
      resize()
      spawn()
    }

    window.addEventListener("resize", onResize)

    const observer = new MutationObserver(() => updateColor())
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      ctx.save()
      ctx.globalCompositeOperation = "source-over"
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        ctx.beginPath()
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${p.a})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()

      rafRef.current = window.requestAnimationFrame(draw)
    }

    if (!prefersReducedMotion()) {
      rafRef.current = window.requestAnimationFrame(draw)
    } else {
      draw()
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    return () => {
      window.removeEventListener("resize", onResize)
      observer.disconnect()
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-70"
    />
  )
}

