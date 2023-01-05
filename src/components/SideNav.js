import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = ({type, theme}) => {

    const color = theme === 'dark' ? ('#fff7ed') : ('#1a1818')
    const myColor = { color }
    const myBgColor = { backgroundColor: color }
    
    const nav = type === 'social' ? (
        <>
            <div className='text-center md:mb-[40px] pl-[20px] md:rotate-[270deg] flex-initial'>
                <a className='nav-left-link' href='https://www.linkedin.com/in/heriz-yusoff/' target='_blank' rel="noopener noreferrer"  style={myColor}>LI</a>
                </div>
            <div className='text-center md:mb-[40px] pl-[20px] md:rotate-[270deg] flex-initial'>
                <a className='nav-left-link' href='https://twitter.com/LetItRisk' target='_blank' rel="noopener noreferrer"  style={myColor}>TW</a>
                </div>
            <div className='text-center md:mb-[40px] pl-[20px] md:rotate-[270deg] flex-initial'>
                <a className='nav-left-link' href='https://github.com/NovemForxuz' target='_blank' rel="noopener noreferrer"  style={myColor}>GH</a>
                </div>
        </>
    ) : (
        <div className='text-center md:mb-[40px] pl-[20px] md:rotate-[270deg] flex-initial'>
            <Link className='nav-left-link' to='/'  style={myColor}>Home</Link>
        </div>
    )

    return (
        <div className='static md:fixed inset-y-0 left-0 w-full md:w-[6%] flex flex-row md:flex-col pt-[5%] md:pb-[30px] box-content items-center z-20'>
            {nav}
            <div className='nav-line md:mx-auto' style={myBgColor}></div>
            <div className='text-center md:absolute md:bottom-[10vh] md:inset-x-0 md:rotate-[270deg]'>
                <div className='copyright'>&copy;/2023</div>
            </div>
        </div>
    )
      
}

export default SideNav

