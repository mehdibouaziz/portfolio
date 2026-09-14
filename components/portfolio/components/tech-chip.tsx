export default function TechChip({label}: {label: string}) {
    return (
        <div className="text-primary/90 text-xs font-semibold bg-primary/10 px-2.5 py-1 rounded-full">
            {label}
        </div>
    )
}