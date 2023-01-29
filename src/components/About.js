import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SideNav from './SideNav'
import Heriz from '../heriz-yusoff.png'
import resume from '../Heriz Yusoff Developer Resume web.pdf'

const About = (props) => {
    useEffect(() => {
        document.title = "Heriz Yusoff – About"
    }, [])

    const myQuote = "I'm Heriz. A developer, maker and problem solver."

    const pdfViewer = <object
            data="https://example.com/test.pdf#page=2"
            type="application/pdf"
            width="100%"
            height="100%"
        >
            <a href={resume} target="_blank" rel="noopener noreferrer"><button>My CV</button></a>
        </object>

    return (
        <div className='container-2xl h-full relative text-[#1a1818] bg-orange-50 about'>
            <div className='fixed background bg-dark animate__animated animate__slideOutUp animate__delay-500ms animate__faster'></div>

            {/* Side Nav bar — About */}
            <SideNav type='home' theme='light' />

            <div className='relative max-w-[90%] mx-auto pr-[5%] pl-[10%]'>
                <div className='relative w-full h-auto max-w-[768px] pt-[10%] pb-[12%]'>
                    <div className='animate__animated animate__zoomIn animate__faster animate__delay-750ms'>
                        <img src={Heriz} alt='Heriz Yusoff' />
                    </div>
                    
                    <div className='overflow-hidden mb-[2vh] pt-[5%]'>
                        <h1 className='text-left header animate__animated animate__slideInUp animate__faster animate__delay-1500ms'>About</h1>
                    </div>
                    
                    <p className='description-static description-long'>
                        <span className='quote' data-title={myQuote}>{myQuote}</span><br />
                        I’ve been coding with computers since the day I first learned Object-oriented programming. Solving algorithms has always fascinated me and I’m never afraid to try something new to explore different technologies, be it frontend or backend.<br /><br />

                    Fast forward to 2023 and I’ve tried a bunch, from Digital Game projects and Mobile Apps to Web Apps using HTML/CSS/JavaScript. Everything I've done, big or small, has been a crucial stepping stone to where I am now.<br /><br />

                    What excites me most about working in software development is being able to code and create things that have purpose and solve real problems. Leaning into customer research and insight, finding the right problems to solve, delivering that value as quickly as possible, learning from it and then iterating and improving that value over time is the key to great software.<br /><br />

                    One of my favourite quotes by Peter Drucker:<br /><br />
                    
                    <span className='quote'>“There is nothing so useless as doing efficiently that which should not be done at all.”</span><br />
                    
                    This resonates so deeply with me because I have no desire to make things just for the sake of it. I only want to create, design, or construct ideas and solutions that have a positive impact on the world.<br /><br />

                    <br />
                    <span className='header'>Experience</span><br />
                    <br />
                    - Degree in Information Engineering and Media<br />
                    - Diploma in Computer Engineering<br />
                    - Recent experience in Web Development (Frontend)<br />
                    <br />
                    Relevant experiences:<br />
                    <br />
                    - Experience in Fullstack Web Development<br />
                    - Experience in Mobile Development (Android)<br />
                    <br />
                    <br />
                    <span className='header'>Skills</span><br />
                    <br />
                    Web Development / JavaScript(ES6) / React / MongoDb / Agile Methodologies / Collaboration / MySQL / HTML and CSS / Responsive Web
                    </p>
                    {pdfViewer}
                    <p className='description-static description-long'>
                    <br />
                    <br />
                    <span className='header'>KUDOS</span><br />
                    <br />
                    Most of what is in this portfolio is team work, it's very rare these days to make anything great all on your own. I have only included work that I had a large contribution to, but whether it's coding, ideas, UX, process, engineering, mentorship, advice or creative direction, the following people have influenced my growth and career path in a massive way:&nbsp;
                    <span><a href='https://www.linkedin.com/in/takrit/?originalSubdomain=sg' target="_blank" rel="noopener noreferrer">Takrit Tanasnitukul</a></span><br />
                    <span><a href='https://www.linkedin.com/in/vengatesang/' target="_blank" rel="noopener noreferrer">Venky</a></span>,&nbsp;
                    <span><a href='https://www.linkedin.com/in/qiyang-sun-292b631a2/' target="_blank" rel="noopener noreferrer">Qiyang Sun</a></span>,&nbsp;
                    <span><a href='https://cliothewindow.wixsite.com/portfolio/' target="_blank" rel="noopener noreferrer">Clio Chuang</a></span>,&nbsp;
                    <span><a href='https://www.linkedin.com/in/limthianyew/' target="_blank" rel="noopener noreferrer">Charles Lim</a></span>,&nbsp;
                    <span><a href='https://www.linkedin.com/in/ljunqian/' target="_blank" rel="noopener noreferrer">Jun Qian</a></span>. THANK YOU.
                    </p>
                    <Link to={'/contact'}><button>Contact me</button></Link>
                </div>
                                                   
            </div>
            
        </div>
    )
}

export default About