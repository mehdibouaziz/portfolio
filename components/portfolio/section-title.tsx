export default function SectionTitle({label}: {label: string}){
    return (
        // add lg:sr-only to hide on big screens
        <div className="sticky top-0 bg-background h-14 flex flex-row items-center">
            <h2 className=" text-sm font-semibold">{label.toUpperCase()}</h2>
        </div>
    )
}