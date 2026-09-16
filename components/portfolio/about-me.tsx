import SectionTitle from "@/components/portfolio/section-title";

export default function AboutMe() {
    return (
        <section id="About_Me" className="flex flex-col gap-5 scroll-mt-24 mb-24" aria-label="ABOUT ME">
            <SectionTitle label={'About me'} lgHidden />
            <p className="pl-4">
                Hi! I&#39;m Mehdi, a Fullstack Software Developer with 3 years of commercial experience. <br/>
                I also have a Master&#39;s Degree in Mechanical Engineering and previously worked as a Project Manager.
            </p>
            <p className="pl-4">
                I equally enjoy working on pixel-perfect silky smooth frontends, and blazingly fast backend algorithms.
                I love asking questions, chatting about software, learning, growing, cooperating, helping, teaching, 
                and challenging when needed, to make sure my team and I provide the best possible service to our users.
            </p>
            <p className="pl-4">
                When coding, I focus on delivering a polished user experience with tested, maintainable and scalable code.
                I always try to go the extra mile, and love getting lost in the dark corners of the codebase to track and squash bugs.
            </p>
            <p className="pl-4">
                Outside work I play padel, practice aikido, work on DIY projects, take photos,
                build more and more trains in Factorio, make homebrew beers, and try to grow enough peppers to cook my own hot sauce!
            </p>
        </section>
    )
}

