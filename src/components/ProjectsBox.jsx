
import { BsEyeFill, BsGithub } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"


export const ProjectsBox = ({project}) => {
    const { image, name, type,  technologies, page, repository, description} = project


    return (
        <>
            <article className="w-full md:w-[90%]  mx-auto grid grid-flow-row  grid-cols-1 md:grid-flow-col md:grid-cols-2 ">
                <div className="flex flex-col md:pr-6 text-center md:text-start">
                    <div>
                        <h3 className="text-lime-400 text-3xl  font-semibold" >{name}</h3>
                        <p className="text-white text-base  mt-2" >{description}</p>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                            {
                                technologies.map(technology => {
                                    return <img key={technology} src={`/images/technologies/${technology}.png`} className=" flex w-6 h-6 rounded-md" alt={`logo ${technology}`}/>
                                })
                            }
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-4 my-3">
                            <a 
                                href={page}
                                target="_blank"
                                className="flex items-center justify-center text-base font-bold border-[1px] duration-300 rounded-lg py-2 px-4 w-[50%] sm:w-36 border-slate-800 bg-slate-800 text-white  hover:border-indigo-600 hover:bg-indigo-600">
                                {type}
                                <CgWebsite className="ml-2 "/>
                            </a>
                            <a 
                                href={repository}
                                target="_blank"
                                className="flex items-center justify-center text-base font-bold border-[1px] duration-300 rounded-lg py-2 px-4 w-[50%]  sm:w-36  border-indigo-600 bg-indigo-600 text-white  hover:border-slate-800 hover:bg-slate-800">
                                Repository
                                <BsGithub className="ml-2 "/>
                            </a>

                        </div>

                    </div>
                </div>
                
                <picture className="md:h-full my-4 md:my-0 md:flex md:items-center">
                    <source srcSet={`/images/projects/${image}.webp`}  type="image/webp"/>
                    <img src={`/images/projects/${image}.png`} alt={image} className="w-auto h-full md:h-auto  rounded-xl"/>
                </picture>

                <div className="block md:hidden">
                    <div className="flex items-center justify-center md:justify-start gap-4 ">
                        {
                            technologies.map(technology => {
                                return <img key={technology} src={`/images/technologies/${technology}.png`} className=" flex w-6 h-6 rounded-md" alt={`logo ${technology}`}/>
                            })
                        }
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-4 my-3">
                        <a 
                            href={page}
                            target="_blank"
                            className="flex items-center justify-center text-base font-bold border-[1px] duration-300 rounded-lg py-2 px-4 w-[50%] sm:w-36 border-slate-800 bg-slate-800 text-white  hover:border-indigo-600 hover:bg-indigo-600">
                            {type}
                            <CgWebsite className="ml-2 "/>
                        </a>
                        <a 
                            href={repository}
                            target="_blank"
                            className="flex items-center justify-center text-base font-bold border-[1px] duration-300 rounded-lg py-2 px-4 w-[50%]  sm:w-36  border-indigo-600 bg-indigo-600 text-white  hover:border-slate-800 hover:bg-slate-800">
                            Repository
                            <BsGithub className="ml-2 "/>
                        </a>

                    </div>

                </div>
                
            </article>
            <hr className="w-full md:w-[90%] lg:w-full lg:mx-10 border-slate-600"/>
        </>
    )
}
