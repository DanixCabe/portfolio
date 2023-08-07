
export const TechBox = ({technology}) => {
    const {image, name } = technology
    return (
        <>
            <div className="px-4 py-6 bg-white rounded-lg shadow-md text-center w-28 h-28">
                <img src={`/images/technologies/${image}.png`} alt="" className="w-auto h-12 mx-auto"/>
                <p className="text-xs font-extrabold mt-3">{name}</p>
            </div>
        </>
    )
}
