export default function SubPageTitle({label, withHomeLink = true}: { label: string, withHomeLink?: boolean }) {
    return (
        <div className="bg-background w-full sticky top-0 pt-12 pb-4">
            {withHomeLink && (
                <a href={"/"} rel="noopener noreferrer" target={undefined} className="flex flex-row items-center gap-1 text-secondary text-sm font-semibold uppercase mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path d="m15 18-6-6 6-6"/>
                    </svg>
                    HOME
                </a>
            )}
            <h1 className="text-2xl uppercase font-semibold">{label}</h1>
        </div>
    )
}