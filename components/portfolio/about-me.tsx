import SectionTitle from "@/components/portfolio/section-title";

export default function AboutMe() {
    return (
        <section id="About_Me" className="flex flex-col gap-4 scroll-mt-24 mb-24 pl-4" aria-label="ABOUT ME">
            <SectionTitle label={'About me'} lgHidden />
            <p>
                {`
                Hi! I'm Mehdi, a Fullstack Software Developer with 3 years of experience. 
                I also have a Master's Degree in Mechanical Engineering and previously worked as a Project Manager.
                `}
            </p>
            <p>
                {`
                I enjoy both frontend and backend equally, and switch between them as needed.
                I like to investigate and solve problems, chat about software, ask questions, learn, grow, brainstorm and cooperate to find better ways to provide the best service to users.
                `}
            </p>
            <p>
                {`
                When coding, I focus on delivering a polished user experience with clean, maintainable and scalable code.
                `}
            </p>
        </section>
    )
}

