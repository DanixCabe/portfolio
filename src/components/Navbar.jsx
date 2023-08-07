
import { useMenuOpen } from "../hooks/useMenuOpen";



export const Navbar = () => {


    const {changeMobMenu, toggleMenu, toggleActive } = useMenuOpen();

    return (
        <>
            <nav className="fixed w-full z-[1001] top-0 bg-slate-900 border-b border-slate-50/[0.06]">
                <div className="md:container lg:container xl:container 2xl:max-w-[1530px] 3xl:max-w-[1920px]  xs:mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="inset-y-0 left-0 flex items-center sm:hidden lg:hidden xl:hidden">
                            <button onClick={(event) => toggleMenu(event)} type="button" className="inline-flex items-center justify-center rounded-md p-2  hover:bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {
                                    (!changeMobMenu) ?
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                    :
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                }
                            </button>
                        </div>
                        <div className="flex flex-1 items-center ml-5 lg:ml-0 lg:items-stretch sm:justify-center xl:justify-center">
                            {/* <img src="/images/danixcabe.png" alt=""  className="w-auto h-10 rounded-full ml-auto lg:ml-0 xl:ml-0 lg:mr-auto "/> */}
                            <div className="hidden  sm:ml-6 sm:block xl:block">
                                <div className="flex space-x-4  text-sm font-medium text-slate-400">
                                    <a  
                                        onClick={(event) => toggleActive(event)}
                                        data-id="about-me"
                                        className={`menu-option rounded-md px-3 py-2 hover:bg-slate-800 hover:text-white   bg-gray-900 ` }
                                        href="#about-me">
                                        About me
                                    </a>
                                    <a  
                                        onClick={(event) => toggleActive(event)}
                                        data-id="technologies"
                                        className={`menu-option rounded-md px-3 py-2 hover:bg-slate-800 hover:text-white bg-gray-900 ` }
                                        href="#technologies">
                                        Technologies
                                    </a>
                                    <a  
                                        onClick={(event) => toggleActive(event)}
                                        data-id="projects"
                                        className={`menu-option rounded-md px-3 py-2 hover:bg-slate-800 hover:text-white bg-gray-900 ` }
                                        href="#projects">
                                        Projects
                                    </a>
                                    <a  
                                        onClick={(event) => toggleActive(event)}
                                        data-id="contact"
                                        className={`menu-option rounded-md px-3 py-2 hover:bg-slate-800 hover:text-white  bg-gray-900 ` }
                                        href="#contact">
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                        
                {
                    (changeMobMenu) && 
                    (
                        <div  className="sm:hidden xl:hidden active:visible transition duration-700" id="mobile-menu">
                            <div className="space-y-2 px-2 pb-3 pt-2 flex flex-col text-slate-400 text text-sm font-medium ">
                                <a  
                                    onClick={(event) => toggleActive(event)}
                                    data-id="about-me"
                                    className={`menu-option rounded-md px-3 py-2 hover:bg-slate-800 hover:text-white ` }
                                    href="#about-me">
                                    About me
                                </a>
                                <a  
                                    onClick={(event) => toggleActive(event)}
                                    data-id="technologies"
                                    className={`menu-option rounded-md px-3 py-2 hover:bg-slate-800 hover:text-white ` }
                                    href="#technologies">
                                    Technologies
                                </a>
                                <a  
                                    onClick={(event) => toggleActive(event)}
                                    data-id="projects"
                                    className={`menu-option rounded-md px-3 py-2 hover:bg-slate-800 hover:text-white ` }
                                    href="#projects">
                                    Projects
                                </a>
                                <a  
                                    onClick={(event) => toggleActive(event)}
                                    data-id="contact"
                                    className={`menu-option  rounded-md px-3 py-2 hover:bg-slate-800 hover:text-white `  }
                                    href="#contact">
                                    Contact
                                </a>
                            
                                
                                
                            </div>
                            
                        </div>
                    )
                }

            </nav>
        </>
    )
}
