import { Section } from "./section"

import { skills } from "@/data/skills"
import { SkillBadge } from "@/components/skills/skill-badge"

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title={
        <>
          Skills &amp; Expertise
        </>
      }
      subtitle="A collection of technologies I’m proficient with, from languages to frameworks and tools."
    >
      <div className="space-y-12">
        {skills.map((cat) => (
          <div key={cat.category}>
            <h3 className="mb-5 font-display text-2xl font-bold tracking-tight">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item) => (
                <SkillBadge key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
