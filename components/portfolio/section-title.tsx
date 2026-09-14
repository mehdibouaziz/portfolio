export default function SectionTitle({label, lgHidden = false}: {label: string, lgHidden?: boolean}){
    return (
        <div className={`${lgHidden && 'lg:hidden'} sticky lg:relative top-0 bg-background h-14 flex flex-row items-center pl-4`}>
            <h2 className=" text-sm font-semibold">{label.toUpperCase()}</h2>
        </div>
    )
}