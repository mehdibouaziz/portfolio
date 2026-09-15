import EmphasisLink from "@/components/emphasis-link/emphasis-link";


export default function Footer() {
    return (
        <div className="mt-12 flex flex-col gap-2.5 text-sm font-light text-secondary">
            <p>Designed in <EmphasisLink url={'/figma'}>Figma↗</EmphasisLink>,
                made in <EmphasisLink>WebStorm</EmphasisLink>.
                Built with <EmphasisLink>Next.js</EmphasisLink> and <EmphasisLink>Tailwind CSS</EmphasisLink>.
                Deployed to <EmphasisLink>Vercel</EmphasisLink>.</p>
            <p>Want to work with me? <a className="hover:text-primary" href="https://www.linkedin.com/in/mehdi-bouaziz/"
                                        target="_blank"
                                        rel="noopener noreferrer">Contact me on Linkedin and let’s have a chat! ↗</a>
            </p>
        </div>
    )
}