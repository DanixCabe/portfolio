import React from 'react'

export const First = () => {
    return (
        <>
            <section className='section-principal pt-20 pb-32 bg-gray-300 relative '>
                <div className='container max-w-[90%] md:max-w-[50%] mx-auto my-auto'>
                    <div className='flex flex-col items-center justify-center animate__animated animate__fadeIn l'>
                        <div className='w-auto p-10 backdrop-blur-xl bg-gray-700/70 rounded-xl'>
                            <p className='text-lg xs:text-xl md:text-2xl lg:text-4xl xl:text-4xl font-semibold text-slate-200  z-40'>Daniel Thomas Gizzi Díaz</p>
                            <p className='text-sm xs:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold text-cyan-500 mt-1 text-center'>Web Developer</p>
                        </div>
                    </div>
                    <div className='flex justify-center '>
                        <img id="about-me" src="/images/img-me.jpg" alt="image me" className='h-60 w-60 md:h-40 md:w-40 animate__animated animate__fadeIn rounded-full absolute z-50 -bottom-[25%] md:-bottom-[15%] shadow-md border-4 backdrop-blur-xl border-slate-400/50'/>
                    </div>
                </div>
            </section>
        </>
    )
}
