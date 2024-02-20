

export const AboutMe = () => {
    return (
        <>
            <div className='md:w-full  sm:container lg:max-w-[70%]  xl:max-w-[1024px]   text-center mx-2 xs:mx-4 md:mx-auto  animate__animated animate__fadeIn'>
                <div className="flex justify-center mb-16 mt-10 md:mt-0">
                    <a 
                        href="/pdf/CV_Daniel_Gizzi.pdf"
                        target="_blank"
                        className="flex items-center justify-center xxs:text-sm xs:text-lg sm:text-lg font-bold border-[1px] rounded-lg px-4 py-3 w-48 duration-300  border-indigo-600 bg-indigo-600 text-white  hover:border-indigo-700 hover:bg-indigo-700">
                    CV Daniel Gizzi</a>
                </div>
                <h2 id="technologies" className="text-4xl text-cyan-400 font-semibold">About me</h2>
                <p className="text-base md:text-xl text-center mx-auto text-slate-200 mt-10 md:w-[70%]">
                    +4 years of experience as a Front-End Developer with a strong passion for continuous learning and professional growth. I
                    possess excellent adaptability to new environments, meticulous planning and organization skills, outstanding
                    communication abilities, and a constructive approach to receiving and incorporating feedback.
                </p>
            </div>
        </>
    )
}
