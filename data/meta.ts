export const meta = {
  name: "Bhuvan Malik",
  role: "Senior Full-Stack Engineer",
  initials: "BM",
  photoSrc: "/photo.jpeg",
  tagline: "I build scalable systems that solve real problems.",
  bio: "I’ve helped scale startup platforms from early architecture to high-traffic production systems, leading teams and collaborating closely across product, backend, and infrastructure. I care about performance, maintainability, and building systems that stay easy to evolve. I specialise in turning complex technical challenges into maintainable solutions.",
  hobbies: ["Soccer", "Tennis", "Boxing", "UFC", "Coffee", "Open Source"],
  email: "bhuvanmalik1994@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/bhuvanmalik007",
    linkedin: "https://linkedin.com/in/bhuvanmalik8",
    medium: "https://medium.com/@bhuvanmalik",
  },
} as const

export const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const
