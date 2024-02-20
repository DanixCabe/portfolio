import { myProjects } from "../data"
import { ProjectsBox } from "./ProjectsBox"


export const Projects = () => {
    return (
        <>
            <div className='xxs:max-w-[90%] md:max-w-[100%] xs:container sm:container xl:max-w-[1024px] mt-20 md: text-center mx-auto animate__animated animate__fadeIn'>
                <h2 id="projects" className="text-4xl text-cyan-400 font-semibold">Projects</h2>
                <div className='flex justify-center gap-7  mt-10 flex-wrap'>

                    {
                        myProjects.map((project) => {
                            return <ProjectsBox key={project.image} project={project}/>
                        })
                    }
                </div>

            </div>
        </>
    )
}
