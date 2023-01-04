import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    const navLeft = () => {

    }
    return (
        <div className='container-2xl h-screen relative bg-orange-50'>
            <div className='absolute inset-y-0 left-0 w-[6%] flex flex-col pt-[5%] pb-[30px] box-content'>
                <div className='text-center mb-[40px] pl-[20px] rotate-[270deg] flex-initial'>
                    <a className='nav-left-link' href='https://www.linkedin.com/in/heriz-yusoff/' target='_blank'>LI</a>
                    </div>
                <div className='text-center mb-[40px] pl-[20px] rotate-[270deg] flex-initial'>
                    <a className='nav-left-link' href='https://twitter.com/LetItRisk' target='_blank'>TW</a>
                    </div>
                <div className='text-center mb-[40px] pl-[20px] rotate-[270deg] flex-initial'>
                    <a className='nav-left-link' href='https://github.com/NovemForxuz' target='_blank'>GH</a>
                    </div>
                <div className='nav-line mx-auto'></div>
                <div className='text-center absolute bottom-[10vh] inset-x-0 rotate-[270deg]'>
                    <div className='copyright'>&copy;/2022</div>
                </div>
            </div>
            <div className='w-11/12 pl-[10%] pr-[5%] mx-auto'>
                <div className='fixed flex bg-grey-100 w-1/4 h-[100vh] flex-col justify-center items-start'>
                    <div className='pt-[90%]'>
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
                <div className='relative inset-y-0 left-auto right-0 w-[65%] h-[90vh] pt-[5vh] flex flex-col justify-center items-center gap-4 float-right'>
                    <ul className='pt-[10%] pl-[6%] text-left'>
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