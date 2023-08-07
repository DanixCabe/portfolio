
import { BsGithub } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"

export const ProjectsBox = ({project}) => {
    const { image, name, technologies, page, repository} = project
    return (
        <div className="card rounded-lg  w-96  overflow-hidden card-projects relative z-10">
            <div className="">
                <img src={`/images/projects/${image}.png`} alt="" className="w-auto h-auto mx-auto "/>
            </div>
            <div className="card-content text-center px-4  absolute z-20 top-0 bottom-0 left-0 right-0 backdrop-brightness-[0.3] h-full">
                <p className="xxs:text-lg xs:text-2xl sm:text-2xl md font-extrabold text-white">{name}</p>
                <div className="flex justify-center items-center space-x-2 mt-1">
                    <a 
                        href={page}
                        target="_blank"
                        className="flex items-center justify-center xxs:text-sm xs:text-lg sm:text-lg font-bold border-[1px] rounded-full mt-2 py-1 xxs:w-28 xs:w-36 sm:w-36 duration-300  border-cyan-500 bg-cyan-500 text-white  hover:border-indigo-600 hover:bg-indigo-600">
                        Website
                        <CgWebsite className="ml-2 duration-300"/>
                        </a>
                    <a 
                        href={repository}
                        target="_blank"
                        className="flex items-center justify-center xxs:text-sm xs:text-lg sm:text-lg font-bold border-[1px] rounded-full mt-2 py-1 xxs:w-28 xs:w-36 sm:w-36 duration-300  border-cyan-500 bg-cyan-500 text-white  hover:border-indigo-600 hover:bg-indigo-600">
                            Repository
                            <BsGithub className="ml-2 "/>
                        </a>
                </div>
                <p className="xxs:text-sm xs:text-lg sm:text-lg font-bold text-white mt-2">Technologies</p>
                <div className="flex items-center justify-center gap-2 mt-3">
                    {
                        technologies.map(technology => {
                            return <img key={technology} src={`/images/technologies/${technology}.png`} className="w-6 h-6 rounded-md"/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
