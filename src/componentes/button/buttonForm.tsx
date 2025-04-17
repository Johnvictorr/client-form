type Interface = {
    label: string
    type: string
    width?: string
}

export default function ButtonForm({label, type, width}: Interface) {

    {width ? width : width = "w-124"}

    return (
        <input type="submit" value={label} className={`p-2 rounded-lg transition duration-300 ease-in-out bg-button hover:bg-hoverButton ${width} text-xs md:text-sm cursor-pointer`}/>
    )
}