export type SkillItem = {
  name: string
  icon?: string
  color?: string
}

export type SkillCategory = {
  category: string
  items: SkillItem[]
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
      { name: "TypeScript", icon: "typescript", color: "3178C6" },
      { name: "SQL", icon: "postgresql", color: "4169E1" },
      { name: "Python", icon: "python", color: "3776AB" },
      { name: "Elixir", icon: "elixir", color: "4B275F" },
      { name: "Java", icon: "openjdk", color: "000000" },
      { name: "HTML5", icon: "html5", color: "E34F26" },
      { name: "CSS3" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "react", color: "61DAFB" },
      { name: "Next.js", icon: "nextdotjs", color: "000000" },
      { name: "NestJS", icon: "nestjs", color: "E0234E" },
      { name: "Node.js", icon: "nodedotjs", color: "339933" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
      { name: "Redux", icon: "redux", color: "764ABC" },
      { name: "Zustand" },
      { name: "Express", icon: "express", color: "000000" },
      { name: "Jest", icon: "jest", color: "C21325" },
      { name: "TanStack", icon: "tanstack", color: "FF4154" },
      { name: "AngularJS" },
      { name: "Electron", icon: "electron", color: "47848F" },
      { name: "WebSockets", icon: "socketdotio", color: "010101" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: "mysql", color: "4479A1" },
      { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
      { name: "MongoDB", icon: "mongodb", color: "47A248" },
      { name: "Redis", icon: "redis", color: "DC382D" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: "git", color: "F05032" },
      { name: "Docker", icon: "docker", color: "2496ED" },
      { name: "AWS", icon: "amazonwebservices", color: "232F3E" },
      { name: "Vercel", icon: "vercel", color: "000000" },
      { name: "Linux", icon: "linux", color: "FCC624" },
      { name: "Figma", icon: "figma", color: "F24E1E" },
      { name: "Cloudflare", icon: "cloudflare", color: "F38020" },
      { name: "GraphQL", icon: "graphql", color: "E10098" },
      { name: "GitHub Actions", icon: "githubactions", color: "2088FF" },
      { name: "Heroku", icon: "heroku", color: "430098" },
    ],
  },
]
