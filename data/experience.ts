export type ExperienceItem = {
  company: string
  companyUrl?: string
  role: string
  location: string
  start: string
  end: string | null
  stack: string[]
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: "Hazlnut",
    role: "Senior Software Developer · Front-End Lead",
    location: "Remote",
    start: "2020-08",
    end: "2026-01",
    stack: ["Next.js", "React", "TypeScript", "SSG/ISR", "AWS", "CI/CD"],
    highlights: [
      "Early engineering hire (top 3) and Front-End Team Lead; owned architecture, tooling, mentoring, and hiring—contributing to Series A growth",
      "Rebuilt online ordering into a high-performance, white-labeled Next.js architecture (SSG + ISR), scaling from ~2M to 10M+ monthly users",
      "Built Twilio-based call-deflection platform (HazlVoice: Lite) with bilingual IVR, onboarding/config, payments, analytics, and embedded React surfaces",
      "Introduced a pnpm/Vite/React/TS micro-frontend monorepo to modernize legacy surfaces and cut feature delivery time by ~40%",
      "Shipped an iPad kiosk app for in-person ordering and integrated payment hardware and gateways for secure processing",
    ],
  },
  {
    company: "PTP Strategy LLC",
    role: "Machine Learning Intern",
    location: "Remote",
    start: "2019-05",
    end: "2019-08",
    stack: ["Python", "TensorFlow", "Keras", "Electron"],
    highlights: [
      "Built and tuned image classifiers for a construction/demolition waste classification platform (WasteAI)",
      "Developed an Electron desktop app for manual labeling and running trained ML models for automated analysis",
    ],
  },
  {
    company: "Chimes Group",
    role: "Software Engineer",
    location: "India",
    start: "2016-09",
    end: "2017-06",
    stack: ["AngularJS", "JavaScript", "HTML/CSS", "Role-Based Access"],
    highlights: [
      "Built core interfaces for a social network web app (feeds, profiles, uploads) using AngularJS",
      "Led a team of 3 to deliver a paid B2B platform with inventory, events, directories, analytics, and access control",
      "Mentored interns, ran interviews, and partnered with cross-functional teams on GIS tooling",
    ],
  },
  {
    company: "ESRI",
    role: "Applications Developer",
    location: "India",
    start: "2015-12",
    end: "2016-09",
    stack: ["ArcGIS JS API", "Web App Builder", "GIS"],
    highlights: [
      "Built GIS tools (event handling, query management, advanced navigation) for a government-backed smart-city web app",
    ],
  },
  {
    company: "IBM",
    role: "Software Engineer Intern",
    location: "India",
    start: "2015-05",
    end: "2015-09",
    stack: ["Android", "SQLite", "GPS", "Signal Processing"],
    highlights: [
      "Created an Android app that records nearby Wi‑Fi access point data (SSID, BSSID, frequency, coordinates, signal strength) and estimates distance using free-space path loss + GPS",
      "Built as a proof-of-concept for indoor location—aimed at determining precise device position within indoor environments",
    ],
  },
]
