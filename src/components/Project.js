import React, { Component } from 'react'

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

    render() {
        const { projects } = this.state
        const projectList = projects.length ? (
            projects.map(project => {
                return (
                    <div key={project.id}>
                        <h2>{project.title}</h2>
                        <h4>- {project.subtitle}</h4>
                    </div>
                )
            })
        ) : (
            <div>There are no projects to display</div>
        )

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
                <div>
                    <h4>PROJECTS</h4>
                    <p>This is a showcase of my best work in a variety of fields, from Fullstack Web development, Marketing and Mobile App development.</p>
                    <p>The world of Web Technologies has grown at an extremely rapid rate over the last 10 years and my aim has been to evolve with it. I’m learning and gaining new skills every day.</p>
                </div>
                {projectList}
            </div>
        )
    }
}

export default Project