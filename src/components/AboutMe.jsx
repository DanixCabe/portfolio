

export const AboutMe = () => {
    return (
        <>
            <div className='xxs:max-w-[90%] xs:container sm:container md:max-w-[70%] lg:max-w-[60%] text-center mx-auto animate__animated animate__fadeIn'>
                <div className="flex justify-center mb-16 mt-10 md:mt-0">
                    <a 
                        href="/pdf/CV_Daniel_Gizzi.pdf"
                        target="_blank"
                        className="flex items-center justify-center xxs:text-sm xs:text-lg sm:text-lg font-bold border-[1px] rounded-full py-3 w-48 duration-300  border-cyan-500 bg-cyan-500 text-white  hover:border-indigo-600 hover:bg-indigo-600">
                    CV Daniel Gizzixdd</a>
                </div>
                <h2 id="technologies" className="text-4xl text-cyan-400 font-semibold">About me</h2>
                <p className="text-xl text-slate-200 mt-10 ">I'm a Front End Developer, I am an autodidact <span className="md:block lg:block xl:block">that effort day-to-day to improve my knowledge in the field.</span></p>
            </div>
        </>
    )
}
