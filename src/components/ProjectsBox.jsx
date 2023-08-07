
import { BsEyeFill, BsGithub } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"


export const ProjectsBox = ({project}) => {
    const { image, name, technologies, page, repository} = project


    return (
        <div className="card rounded-lg bg-white w-96  overflow-hidden relative border border-slate-700">
            <div className="">
                <img src={`/images/projects/${image}.png`} alt="" className="w-auto h-auto mx-auto "/>
            </div>
            <div data-id={image} className="card-content text-center h-auto">
                <div className="card-body px-4 py-4  ">
                    <p className="xxs:text-lg xs:text-2xl sm:text-2xl md font-extrabold text-slate-700">{name}</p>
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
                            className="flex items-center justify-center xxs:text-sm xs:text-lg sm:text-lg font-bold border-[1px] rounded-full mt-2 py-1 xxs:w-28 xs:w-36 sm:w-36 duration-300  border-indigo-600 bg-indigo-600 text-white  hover:border-cyan-500 hover:bg-cyan-500">
                                Repository
                                <BsGithub className="ml-2 "/>
                            </a>
                    </div>
                </div>
                <div className="card-footer bg-slate-100 border-t border-slate-700/20 w-full p-3">
                    <div className="flex items-center justify-center gap-2 ">
                        {
                            technologies.map(technology => {
                                return <img key={technology} src={`/images/technologies/${technology}.png`} className="w-6 h-6 rounded-md"/>
                            })
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}
