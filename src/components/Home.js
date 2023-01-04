import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    const navLeft = () => {

    }
    return (
        <div className='container-2xl h-screen relative bg-orange-50'>
            {/* Side Nav bar — Home */}
            <div className='static md:absolute inset-y-0 left-0 w-full md:w-[6%] flex flex-row md:flex-col pt-[5%] md:pb-[30px] box-content items-center z-20'>
                <div className='text-center md:mb-[40px] pl-[20px] md:rotate-[270deg] flex-initial'>
                    <a className='nav-left-link' href='https://www.linkedin.com/in/heriz-yusoff/' target='_blank'>LI</a>
                    </div>
                <div className='text-center md:mb-[40px] pl-[20px] md:rotate-[270deg] flex-initial'>
                    <a className='nav-left-link' href='https://twitter.com/LetItRisk' target='_blank'>TW</a>
                    </div>
                <div className='text-center md:mb-[40px] pl-[20px] md:rotate-[270deg] flex-initial'>
                    <a className='nav-left-link' href='https://github.com/NovemForxuz' target='_blank'>GH</a>
                    </div>
                <div className='nav-line md:mx-auto'></div>
                <div className='text-center md:absolute md:bottom-[10vh] md:inset-x-0 md:rotate-[270deg]'>
                    <div className='copyright'>&copy;/2022</div>
                </div>
            </div>
            
            {/* Content */}
            <div className='w-full lg:w-11/12 pl-[10%] pr-[5%] mx-auto z-10'>
                <div className='fixed flex bg-grey-100 w-4/4 lg:w-1/4 h-[15vh] lg:h-[100vh] flex-col justify-center items-start'>
                    <div className='mt-[60%] sm:mt-[20%] md:pt-[70%]'>
                        <div className='mb-[2vh] pt-[5%]'>
                            <h3 className='header swipe-up'>HERIZ YUSOFF</h3>
                        </div>
                        <div className='overflow-hidden block'>
                            <p className='description'>
                                Aspiring Software Engineer and Frontend Web Developer
                            </p>
                        </div>
                        <div className='overflow-hidden block'>
                            <p className='description'>
                                Currently a Final Year student at <span><a href='https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-engineering-in-information-engineering-and-media-iem' target='_blank'>Nanyang Technological University</a></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='static lg:relative inset-y-0 left-auto right-0 w-full lg:w-[65%] h-[90vh] pt-[35vh] sm:pt-[23vh] md:pt-[40vh] lg:pt-[15vh] lg:flex flex-col justify-center items-center gap-4 lg:float-right'>
                    <ul className='pt-[10%] lg:pl-[6%] text-left'>
                        <li className='relative inline-block pr-[5%] text-right'>
                            <Link className='nav-link' to='/project'>Project</Link></li>
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