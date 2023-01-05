import React from 'react'
import { Link } from 'react-router-dom'
import SideNav from './SideNav'
import Heriz from '../heriz-yusoff.png'
import resume from '../Heriz Yusoff_Resume_Jun22.pdf'

const About = (props) => {

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
        <div className='container-2xl h-full relative bg-orange-50 about'>
            {/* Side Nav bar — About */}
            <SideNav type='home' theme='light' />

            <div className='relative max-w-[90%] mx-auto pr-[5%] pl-[10%]'>
                <div className='relative w-full h-auto max-w-[768px] pt-[10%] pb-[12%]'>
                    <img src={Heriz} alt='Heriz Yusoff' />
                    <div className='overflow-hidden mb-[2vh] pt-[5%]'>
                        <h1 className='text-left header'>About</h1>
                    </div>
                    
                    <p className='description-static description-long'>
                        <span className='quote' data-title={myQuote}>{myQuote}</span><br />
                    I’ve been designing with computers since the day I first opened Microsoft Paint. The cusp of art and technology has always fascinated me and I've never been afraid to just jump in and give it a go, whether it's Paint, Photoshop, Sketch or CSS.<br /><br />

                    Fast forward to 2022 and I’ve tried it all, from Digital Campaign Design and Flash Actionscript to Web Design, Animation, HTML/CSS/Webflow, Product Design and Product Management. Everything I have done, small or big, has been a vital stepping stone for where I am today.<br /><br />

                    What excites me most about working in software development is being able to design and create things that have purpose and solve real problems. Leaning into customer research and insight, finding the right problems to solve, delivering that value as quickly as possible, learning from it and then iterating and improving that value over time is the key to great design.<br /><br />

                    One of my favourite quotes by Peter Drucker:<br /><br />
                    
                    <span className='quote'>“There is nothing so useless as doing efficiently that which should not be done at all.”</span><br />
                    
                    This resonates so deeply with me because I have no desire to make things just for the sake of it. I only want to make, design or build ideas and products that matter and have a positive impact in the world.<br /><br />

                    <br />
                    <span className='header'>Experience</span><br />
                    <br />
                    - Degree in Information Engineering and Media<br />
                    - Recent experience in Digital Design, Web Development, and Mobile Development<br />
                    <br />
                    Within those 14 years, I have:<br />
                    <br />
                    - 1 years experience in Software Development<br />
                    - 3 years experience in Front-end Web Development, <br />
                    - Recent experience in Web Development<br />
                    <br />
                    <br />
                    <span className='header'>Skills</span><br />
                    <br />
                    Web Development / MongoDb / Agile Methodologies / Collaboration / Design Systems / HTML and CSS / Responsive Web / Photography 
                    </p>
                    {pdfViewer}
                    <p className='description-static description-long'>
                    <br />
                    <br />
                    <span className='header'>KUDOS</span><br />
                    <br />
                    Most of what is in this portfolio is team work, it's very rare these days to make anything great all on your own. I have only included work that I had a large contribution to, but whether it's design, ideas, UX, process, engineering, mentorship, advice or creative direction, the following people have influenced my growth and career path in a massive way:&nbsp;
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