export default function TechChip({label}: {label: string}) {
    return (
        <div className="text-chip-font text-xs font-semibold bg-chip-back px-2.5 py-1 rounded-full">
            {label}
        </div>
    )
}