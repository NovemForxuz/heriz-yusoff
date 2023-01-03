import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {

    return (
        <div className='container-2xl h-screen relative'>
                <div className='absolute inset-y-0 left-0 w-[6%] bg-red-200 flex flex-col pt-[5%] pb-[30px] box-content'>
                    <div className='text-center mb-[40px] pl-[20px] rotate-[270deg] flex-initial'>
                        <a className='nav-left-link' href='/'>Home</a>
                    </div>
                    <div className='nav-line mx-auto'></div>
                    <div className='text-center absolute bottom-[10vh] inset-x-0 rotate-[270deg]'>
                        <div className='copyright'>&copy;/2022</div>
                    </div>
                </div>
            <h1>About</h1>
            <h3>I'm Heriz. A developer, maker and problem solver.</h3>
            <p>
            I’ve been designing with computers since the day I first opened Microsoft Paint. The cusp of art and technology has always fascinated me and I've never been afraid to just jump in and give it a go, whether it's Paint, Photoshop, Sketch or CSS. 

            Fast forward to 2022 and I’ve tried it all, from Digital Campaign Design and Flash Actionscript to Web Design, Animation, HTML/CSS/Webflow, Product Design and Product Management. Everything I have done, small or big, has been a vital stepping stone for where I am today.

            What excites me most about working in software development is being able to design and create things that have purpose and solve real problems. Leaning into customer research and insight, finding the right problems to solve, delivering that value as quickly as possible, learning from it and then iterating and improving that value over time is the key to great design.

            One of my favourite quotes by Peter Drucker:
            </p>
            <h3>“There is nothing so useless as doing efficiently that which should not be done at all.”</h3>
            <p>
            This resonates so deeply with me because I have no desire to make things just for the sake of it. I only want to make, design or build ideas and products that matter and have a positive impact in the world.


            Experience

            - Degree in Information Engineering and Media
            - Recent experience in Digital Design, Web Development, and Mobile Development

            Within those 14 years, I have:

            - 1 years experience in Software Development
            - 3 years experience in Front-end Web Development, 
            - Recent experience in Web Development


            <span><h4>Skills</h4></span>

            UI/UX Design / MongoDb / Agile Methodologies / Collaboration / Design Systems / HTML and CSS / Web Development / Responsive Web / Photography 
            </p>
            <button>My CV</button>
            <p>
            <span><h4>KUDOS</h4></span>

            Most of what is in this portfolio is team work, it's very rare these days to make anything great all on your own. I have only included work that I had a large contribution to, but whether it's design, ideas, UX, process, engineering, mentorship, advice or creative direction, the following people have influenced my growth and career path in a massive way:
            </p>
            <button><Link to={'/contact'}>Contact me</Link></button>
        </div>
    )
}

export default About