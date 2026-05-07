import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SideNav from './SideNav'
import Heriz from '../heriz-yusoff.png'
import resume from '../Heriz Yusoff Developer Resume web.pdf'

const About = () => {
    useEffect(() => {
        document.title = "Heriz Yusoff – About"
    }, [])

    const myQuote = "I'm Heriz. A frontend engineer, builder and problem solver."

    const pdfViewer = (
        <object
            data="https://example.com/test.pdf#page=2"
            type="application/pdf"
            width="100%"
            height="100%"
        >
            <a href={resume} target="_blank" rel="noopener noreferrer">
                <button>My CV</button>
            </a>
        </object>
    )

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
                        <h1 className='text-left header animate__animated animate__slideInUp animate__faster animate__delay-1500ms'>
                            About
                        </h1>
                    </div>

                    <p className='description-static description-long'>
                        <span className='quote' data-title={myQuote}>
                            {myQuote}
                        </span>
                        <br /><br />

                        I enjoy creating software that feels intuitive, purposeful and impactful. My journey into tech started with curiosity around programming and algorithms, and over time evolved into a passion for building products that solve real-world problems.
                        <br /><br />

                        Over the years, I’ve explored different areas of software development — from game projects and Android applications to fullstack web platforms and modern frontend systems. More recently, I’ve been focusing heavily on frontend engineering with React-based technologies, building responsive and scalable user experiences while balancing performance, maintainability and clean design.
                        <br /><br />

                        What excites me most about software development is the process of turning ideas into usable products. I enjoy understanding problems, simplifying complexity and building solutions that people can actually use effectively. I’m especially interested in the intersection between engineering, product thinking and user experience.
                        <br /><br />

                        Recently, I’ve also been working on larger workflow-driven systems involving enterprise application design, API architecture and AI-assisted development processes. I enjoy turning complex operational problems into clean and manageable digital experiences.
                        <br /><br />

                        One principle that strongly shapes how I write software comes from Joel Spolsky:
                        <br /><br />

                        <span className='quote'>
                            “It is harder to read code than to write it.”
                        </span>
                        <br /><br />

                        I believe good software isn’t just about making things work — it’s about building systems that are understandable, maintainable and scalable for the people working on them in the future.
                        <br /><br />

                        <span className='header'>Experience</span>
                        <br /><br />

                        - Degree in Information Engineering and Media
                        <br />
                        - Diploma in Computer Engineering
                        <br />
                        - Experience in Frontend & Fullstack Web Development
                        <br />
                        - Experience building responsive web applications and mobile apps
                        <br />
                        - Experience designing workflow-driven systems and APIs
                        <br /><br />

                        <span className='header'>Skills</span>
                        <br /><br />

                        React / JavaScript (ES6+) / TypeScript / HTML & CSS / Responsive Design / Fullstack Development / REST APIs / MongoDB / MySQL / Git / Agile Methodologies / CI/CD / Collaboration / Problem Solving
                        <br /><br />

                        <span className='header'>Currently Interested In</span>
                        <br /><br />

                        - Frontend engineering and scalable UI systems
                        <br />
                        - Product-focused software development
                        <br />
                        - Enterprise workflow and operational tooling
                        <br />
                        - AI-assisted development workflows
                        <br />
                        - Building clean and maintainable systems
                    </p>

                    {pdfViewer}

                    <Link to={'/contact'}>
                        <button>Contact me</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default About