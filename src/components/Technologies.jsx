
import { myTechnolgies } from '../data'
import { TechBox } from './'


export const Technologies = () => {


    return (
        <>
            <div className='xxs:max-w-[90%] xs:container sm:container xl:max-w-[1024px] mt-20 text-center mx-auto animate__animated animate__fadeIn'>
                <h2  className="text-4xl text-cyan-400 font-semibold">Technologies</h2>
                <div  className='flex flex-wrap gap-5 justify-center mt-10'>
                    {
                        myTechnolgies.map((technology) => {
                            return <TechBox key={technology.image} technology={technology}/>
                        })
                    }
                </div>

            </div>
        </>
    )
}
