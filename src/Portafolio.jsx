import { AboutMe, Contact, First, Navbar, Projects, Technologies } from "./components"


export const Portafolio = () => {
    return (
        <>
            <Navbar/> 
            <First/>
            <section className='pt-32 pb-32 relative bg-gradient-to-r from-slate-700 from-20% via-60% via-slate-800 to-100% to-slate-900'>
                <AboutMe/>
                <Technologies/>
                <Projects/>
                <Contact/>
            </section>

        </>

        
    )
}
