import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = ({type, theme}) => {

    const color = theme === 'dark' ? ('#fff7ed') : ('#1a1818')
    const myColor = { color }
    const myLineColor = { backgroundColor: color }

    // to be moved...
    const socials = [
        {
            'title': 'linkedin',
            'title-short' : 'LI',
            'link': 'https://www.linkedin.com/in/heriz-yusoff/'
        },
        {
            'title': 'github',
            'title-short' : 'GH',
            'link': 'https://github.com/NovemForxuz'
        },
        {
            'title': 'pinterest',
            'title-short' : 'PT',
            'link': 'https://www.pinterest.com/muhpii04/'
        },
    ]
    
    const nav = type === 'social' ? socials.map((social) => {
        return (
            <> 
                <div className='text-center md:mb-[40px] pl-[20px] md:rotate-[270deg] flex-initial'>
                    <a className='nav-left-link' href={social.link} target='_blank' rel="noopener noreferrer"  style={myColor}>{social['title-short']}</a>
                </div>
            </>
        )
    }) : (
        <div className='text-center md:mb-[40px] pl-[20px] md:rotate-[270deg] flex-initial'>
            <Link className='nav-left-link' to='/'  style={myColor}>Home</Link>
        </div>
    )

    return (
        <div className='relative md:fixed top-0 md:inset-y-0 md:left-0 w-full md:w-[6%] flex flex-row md:flex-col pt-[5%] md:pb-[30px] box-content items-center z-20'>
            {nav}
            <div className='nav-line md:mx-auto' style={myLineColor}></div>
            <div className='text-center md:absolute md:bottom-[10vh] md:inset-x-0 md:rotate-[270deg]'>
                <div className='copyright' style={myColor}>&copy;/2024</div>
            </div>
        </div>
    )
      
}

export default SideNav

