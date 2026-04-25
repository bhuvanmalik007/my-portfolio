import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 justify-between px-4 md:px-8">
        {/* Left Side: Name/Logo */}
        <div className="flex items-center gap-2">
          {/* <span className="text-xl font-bold tracking-tight cursor-pointer hover:opacity-80 transition-opacity">
            Bhuvan Malik
          </span> */}
        </div>

        {/* Right Side: Navigation & Theme Toggle */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {/* Links will go here later */}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}