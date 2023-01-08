import React, { Component, useEffect } from 'react'
import SideNav from './SideNav'

class Project extends Component {
    state = {
        projects: [
            { title: "RISE PROJECT", subtitle: "WEB DEVELOPMENT", id: 1 },
            { title: "WEB PORTFOLIO", subtitle: "REACT DEVELOPMENT", id: 2 },
            { title: "FLOAT", subtitle: "REACT NATIVE DEVELOPMENT", id: 3 },
            { title: "MASHU", subtitle: "MARKETING & WEB DEVELOPMENT", id: 4 },
            { title: "MOVIE BOOKING", subtitle: "FULLSTACK WEB DEVELOPMENT", id: 5 },
            { title: "SUDOKU", subtitle: "GAME DEVELOPMENT", id: 6 },
            { title: "VMS", subtitle: "MOBILE DEVELOPMENT", id: 7 },
            { title: "QUIZ", subtitle: "MOBILE DEVELOPMENT", id: 8 }
        ]
    }

    componentDidMount(){
        document.title = "Heriz Yusoff – Project"
    }

    render() {
        const { projects } = this.state
        const projectList = projects.length ? (
            projects.map(project => {
                return (
                    <div key={project.id} className="relative block pr-[5%] text-right">
                        <h2 className='nav-link'>{project.title}</h2>
                        <h4 className='header header-small'>- {project.subtitle}</h4>
                    </div>
                )
            })
        ) : (
            <div>There are no projects to display</div>
        )

        return (
            <div className='container-2xl h-screen relative  bg-[#1a1818] text-orange-50 project overflow-scroll'>
                {/* Side Nav bar — Project */}
                <SideNav type='home' theme='dark' />

                {/* content */}
                <div className='relative h-screen max-w-[90%] mx-auto pr-[5%] pl-[10%]'>
                    <div className='sticky top-0 md:fixed flex w-full md:w-1/4 h-max md:h-[100vh] flex-col justify-center items-start bg-[#1a1818] z-10 shadow-[0_15px_10px_0_rgba(26,24,24,0.99)]'>
                        <div className='ml-[-10%] py-[10%] md:pt-[90%] '>
                            <div className='mb-[2vh] pt-[5%] overflow-hidden'>
                                <h1 className='header swipe-up'>PROJECT</h1>
                            </div>
                            <div className='block overflow-hidden'>
                                <p className='description'>This is a showcase of my best project in a variety of fields, from Fullstack Web development, Marketing and Mobile App development.</p>
                            </div>
                            <div className='block overflow-hidden'>
                                <p className='description'>The world of Web Technologies has grown at an extremely rapid rate over the last 10 years and my aim has been to evolve with it. I’m learning and gaining new skills every day.</p>
                            </div>
                        </div>
                    </div>
                    <div className='section-right section-long'>
                        <div className='pt-[5%] md:pt-[10%] md:pl-[6%] text-left'>
                            {projectList}
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Project