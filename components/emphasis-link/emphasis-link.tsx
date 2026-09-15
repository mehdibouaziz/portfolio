export default function EmphasisLink({children, url, newTab}: { children: React.ReactNode, url?: string, newTab?: boolean}) {
    const span = (
        <span className="font-medium text-foreground">
            {children}
        </span>
    )

    if(url) {
        return <a href={url} target={newTab ? "_blank" : undefined} rel="noopener noreferrer">{span}</a>
    }
    return (span)
}