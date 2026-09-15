import {experienceI} from "@/components/portfolio/experience/constants";
import TechChip from "@/components/portfolio/components/tech-chip";

export default function ExperienceCard({experience}: { experience: experienceI }) {
    return (
        <div className="flex flex-row pl-4">
            <div className="w-2/8 text-sm">
                {`${experience.startYear} — ${experience.endYear ?? 'CURRENT'}`}
            </div>
            <div className="w-6/8 flex flex-col gap-2">
                <div className="flex flex-row gap-2.5 items-center">
                    <p className="font-semibold text-sm">
                        {`${experience.jobTitle}`}
                    </p>
                    <span className="text-primary font-bold">·</span>
                    <p className="font-semibold text-sm">
                        {`${experience.employer}`}{experience.location && `, ${experience.location}`}
                    </p>
                </div>
                <p className="text-sm">
                    {`${experience.description}`}
                </p>
                <div className="flex flex-row gap-2.5 mt-1">
                    {experience.tags.map(tag => (
                        <TechChip label={tag} key={`${experience.key}-${tag}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}