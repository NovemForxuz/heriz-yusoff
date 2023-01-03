import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    const navLeft = () => {

    }
    return (
        <div className='container-2xl h-screen relative'>
            <div className='absolute inset-y-0 left-0 w-[6%] bg-red-200 flex flex-col pt-[5%] pb-[30px] box-content'>
                <div className='text-center mb-[40px] pl-[20px] rotate-[270deg] flex-initial'>
                    <a className='nav-left-link' href='https://www.linkedin.com/in/heriz-yusoff/'>LI</a>
                    </div>
                <div className='text-center mb-[40px] pl-[20px] rotate-[270deg] flex-initial'>
                    <a className='nav-left-link' href='https://twitter.com/LetItRisk'>TW</a>
                    </div>
                <div className='text-center mb-[40px] pl-[20px] rotate-[270deg] flex-initial'>
                    <a className='nav-left-link' href='https://github.com/NovemForxuz'>GH</a>
                    </div>
                <div className='nav-line mx-auto'></div>
                <div className='text-center absolute bottom-[10vh] inset-x-0 rotate-[270deg]'>
                    <div className='copyright'>&copy;/2022</div>
                </div>
            </div>
            <div className='w-11/12 bg-blue-200 pl-[10%] pr-[5%] mx-auto'>
                <div className='fixed flex w-1/4 h-[100vh] flex-col justify-center items-start'>
                    <div className='pt-[90%]'>
                        <h3>HERIZ YUSOFF</h3>
                        <p>
                            Aspiring Software Engineer and Frontend Web Developer
                        </p>
                        <p>
                            Currently a final year student at Nanyang Technological University
                        </p>
                    </div>
                </div>
                <div className='relative inset-y-0 left-auto right-0 w-[65%] h-[90vh] pt-[5vh] flex flex-col justify-center items-center gap-4'>
                    <ul>
                        <li><Link to='/project'>Project</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home