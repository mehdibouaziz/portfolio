import SectionTitle from "@/components/portfolio/section-title";
import ExperienceCard from "@/components/portfolio/experience/experience-card";
import {experienceI, EXPERIENCES} from "@/components/portfolio/experience/constants";

export default function Experience() {
    return (
        <section id="Experience" className="flex flex-col gap-10 scroll-mt-24 mb-24" aria-label="ABOUT ME">
            <SectionTitle label={'Experience'}/>
            {
                EXPERIENCES.map((experience: experienceI) => (
                    <ExperienceCard key={experience.key} experience={experience}/>
                ))
            }
        </section>
    )
}
