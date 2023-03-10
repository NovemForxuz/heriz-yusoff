import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SideNav from './SideNav'
import 'animate.css'
import animateCSS from './Animation'

const Home = (props) => {
    useEffect(() => {
        document.title = "Heriz Yusoff"

        const interval = setInterval(() => {
            animateCSS('#project', 'pulse')
        }, 3000)

        return () => clearInterval(interval)        // similar to componentWillUnmount; prevent memory leak
    }, [])

    
    return (
        <div className='container-2xl h-screen relative bg-orange-50'>
            <div className='fixed background bg-dark animate__animated animate__slideOutDown animate__delay-500ms animate__faster'></div>
            
            {/* Side Nav bar — Home */}
            <SideNav type='social' />

            {/* Content */}
            <div className='w-full lg:w-11/12 pl-[10%] pr-[5%] mx-auto z-10'>
                <div className='fixed flex bg-grey-100 w-4/4 lg:w-1/4 h-[15vh] lg:h-[100vh] flex-col justify-center items-start'>
                    <div className='mt-[60%] sm:mt-[20%] md:pt-[70%]'>
                        <div className='mb-[2vh] pt-[5%]'>
                            <div className='overflow-hidden'>
                                <h3 className='header swipe-up animate__animated animate__slideInUp animate__faster animate__delay-750ms'>HERIZ YUSOFF</h3>
                            </div>
                        </div>
                        <div className='overflow-hidden block'>
                            <p className='description animate__animated animate__slideInUp animate__faster animate__delay-750ms'>
                                Aspiring Software Engineer and Frontend Web Developer
                            </p>
                        </div>
                        <div className='overflow-hidden block'>
                            <p className='description animate__animated animate__slideInUp animate__faster animate__delay-750ms'>
                                Currently a Final Year student at <span><a href='https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-engineering-in-information-engineering-and-media-iem' target='_blank' rel="noopener noreferrer">Nanyang Technological University</a></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='static lg:relative inset-y-0 left-auto right-0 w-full lg:w-[65%] h-[90vh] pt-[35vh] sm:pt-[23vh] md:pt-[40vh] lg:pt-[15vh] lg:flex flex-col justify-center items-center gap-4 lg:float-right'>
                    <ul className='pt-[10%] lg:pl-[6%] text-left animate__animated animate__blurIn animate__delay-750ms'>
                        <li className='relative inline-block pr-[5%] text-right'>
                            <Link className='nav-link' to='/project' id='project'>Project</Link></li>
                        <li className='relative inline-block pr-[5%] text-right'>
                            <Link className='nav-link' to='/about'>About</Link></li>
                        <li className='relative inline-block pr-[5%] text-right'>
                            <Link className='nav-link' to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home