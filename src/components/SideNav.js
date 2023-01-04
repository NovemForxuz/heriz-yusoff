import React from 'react'

const SideNav = ({type}) => {
    
    const nav = type === 'social' ? (
        <>
            <div className='text-center md:mb-[40px] pl-[20px] md:rotate-[270deg] flex-initial'>
                <a className='nav-left-link' href='https://www.linkedin.com/in/heriz-yusoff/' target='_blank' rel="noopener noreferrer">LI</a>
                </div>
            <div className='text-center md:mb-[40px] pl-[20px] md:rotate-[270deg] flex-initial'>
                <a className='nav-left-link' href='https://twitter.com/LetItRisk' target='_blank' rel="noopener noreferrer">TW</a>
                </div>
            <div className='text-center md:mb-[40px] pl-[20px] md:rotate-[270deg] flex-initial'>
                <a className='nav-left-link' href='https://github.com/NovemForxuz' target='_blank' rel="noopener noreferrer">GH</a>
                </div>
        </>
    ) : (
        <div className='text-center md:mb-[40px] pl-[20px] md:rotate-[270deg] flex-initial'>
            <a className='nav-left-link' href='/'>Home</a>
        </div>
    )

    return (
        <div className='static md:absolute inset-y-0 left-0 w-full md:w-[6%] flex flex-row md:flex-col pt-[5%] md:pb-[30px] box-content items-center z-20'>
            {nav}
            <div className='nav-line md:mx-auto'></div>
            <div className='text-center md:absolute md:bottom-[10vh] md:inset-x-0 md:rotate-[270deg]'>
                <div className='copyright'>&copy;/2022</div>
            </div>
        </div>
    )
      
}

export default SideNav
