export default function SubPagesLayout({children}: LayoutProps<"/">) {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
                {children}
        </div>
    )
}