const footer = () => {
    let year = new Date().getFullYear()
    
    return (
        <div className="p-11 border-t mt-8 flex justify-between">
        <span>© {year} All Rights Reserved.</span>
        <span className="font-bold">TravelZone</span>
        </div>
    )
}

export default footer