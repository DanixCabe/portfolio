import { myProjects } from "../data"
import { ProjectsBox } from "./ProjectsBox"


export const Projects = () => {
    return (
        <>
            <div className='xxs:max-w-[90%] xs:container sm:container xl:max-w-[1200px] 3xl:max-w-[1440px] mt-20 text-center mx-auto animate__animated animate__fadeIn'>
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
