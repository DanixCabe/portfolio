import { BsGithub, BsLinkedin } from "react-icons/bs"


export const Contact = () => {
    return (
        <footer className='xxs:max-w-[90%] xs:container sm:container md:max-w-[70%] lg:max-w-[60%] text-center mx-auto animate__animated animate__fadeIn mt-20'>
            <h2 id="contact" className="text-4xl text-cyan-400 font-semibold">Contact</h2>
            <p className="text-xl text-slate-200 mt-10 ">My social networks are...</p>
            <div className="flex justify-center space-x-10 text-5xl text-white ">
                <a href="https://github.com/DanixCabe" target="_blank" className="transform duration-150 hover:scale-[1.20]" aria-label="github link">
                    <BsGithub className="mt-5 mb-4 "/>
                </a>
                <a href="https://www.linkedin.com/in/daniel-thomas-gizzi-diaz/" target="_blank" className="transform duration-150 hover:scale-[1.20]" aria-label="linkedin link">
                    <BsLinkedin className="mt-5 mb-4 "/>
                </a>
            </div>
        </footer>

    )
}
