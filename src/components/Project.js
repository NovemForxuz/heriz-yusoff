import React, { Component } from 'react'
import SideNav from './SideNav'

class Project extends Component {
    state = {
        projects: [
            { title: "RISE PROJECT", subtitle: "WEB DEVELOPMENT", id: 1 },
            { title: "TECHFOLIO", subtitle: "REACT DEVELOPMENT", id: 2 },
            { title: "FLOAT", subtitle: "REACT NATIVE DEVELOPMENT", id: 3 },
            { title: "MASHU", subtitle: "MARKETING & WEB DEVELOPMENT", id: 4 },
            { title: "MOVIE BOOKING", subtitle: "FULLSTACK WEB DEVELOPMENT", id: 5 },
            { title: "SURVEY ", subtitle: "MOBILE DEVELOPMENT", id: 6 }
        ],
        links: {
            1: '',
            2: 'https://github.com/NovemForxuz/heriz-yusoff',
            3: 'https://github.com/ljunqian/Float',
            4: 'https://github.com/NovemForxuz/aesthetic-clinic-cs2024',
            5: 'https://github.com/NovemForxuz/Cinema-Booking',
            6: 'https://github.com/NovemForxuz/IM2073-SimpleSurvey',
        },
        default: {
            title: 'PROJECT',
            desc1: 'This is a showcase of my best project in a variety of fields, from Fullstack Web development, Marketing and Mobile App development.',
            desc2: 'The world of Web Technologies has grown at an extremely rapid rate over the last 10 years and my aim has been to evolve with it. I’m learning and gaining new skills every day.'
        }
        
    }

    componentDidMount(){
        document.title = "Heriz Yusoff – Project"
    }

    handleClick = (event) => {
        const nodeTitle = event.target.innerText
        if (event.target.nodeName === 'H2') {
            document.getElementById('title').innerText = nodeTitle
        } else {
            document.getElementById('title').innerText = this.state.default.title
            document.getElementById('desc1').innerText = this.state.default.desc1
            document.getElementById('desc2').innerText = this.state.default.desc2
        }
        
        console.log(event.target.innerText)
        console.log(this.state)
    }

    render() {
        
        const { projects, links } = this.state
        const projectList = projects.length ? (
            projects.map(project => {
                if (project.id === 1) {
                    return (
                        <div key={project.id} className="relative block pr-[5%] text-right">
                            <h2 className='nav-link'><a href={links[project.id]}>{project.title}</a></h2>
                            <h4 className='header header-small'>- {project.subtitle}</h4>
                        </div>
                    )
                } else {
                    return (
                        <div key={project.id} className="relative block pr-[5%] text-right">
                            <h2 className='nav-link'><a href={links[project.id]} target='_blank' rel="noreferrer">{project.title}</a></h2>
                            <h4 className='header header-small'>- {project.subtitle}</h4>
                        </div>
                    )
                }
                
            })
        ) : (
            <div>There are no projects to display</div>
        )

        return (
            <div className='container-2xl h-screen relative  bg-[#1a1818] text-orange-50 project overflow-scroll'>
                {/* Side Nav bar — Project */}
                <SideNav type='home' theme='dark' />

                {/* content */}
                <div className='relative h-screen max-w-[90%] mx-auto pr-[5%] pl-[10%]' onClick={event => this.handleClick(event)}> 
                    <div className='sticky top-0 md:fixed flex w-full md:w-1/4 h-max md:h-[100vh] flex-col justify-center items-start bg-[#1a1818] z-10 shadow-[0_15px_10px_0_rgba(26,24,24,0.99)]'>
                        <div className='ml-[-10%] py-[10%] md:pt-[90%]' id='section-wrapper'>
                            <div className='mb-[2vh] pt-[5%] overflow-hidden'>
                                <h1 className='header swipe-up' id='title'>PROJECT</h1>
                            </div>
                            <div className='block overflow-hidden'>
                                <p className='description' id='desc1'>This is a showcase of my best project in a variety of fields, from Fullstack Web development, Marketing and Mobile App development.</p>
                            </div>
                            <div className='block overflow-hidden'>
                                <p className='description' id='desc2'>The world of Web Technologies has grown at an extremely rapid rate over the last 10 years and my aim has been to evolve with it. I’m learning and gaining new skills every day.</p>
                            </div>
                        </div>
                    </div>
                    <div className='section-right section-long'>
                        <div className='pt-[5%] md:pt-[10%] md:pl-[6%] text-left'>
                            {projectList}
                            <br />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Project