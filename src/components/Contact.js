import React, { Component } from 'react'
import SideNav from './SideNav'

class Contact extends Component {
    componentDidMount(){
        document.title = "Heriz Yusoff – Contact"
    }
    render() {
        // const creativeBriefForm = 'https://forms.gle/GUBWa3KSu3Mc5fSa8'
        return (
            <div className='container-2xl h-screen relative bg-orange-50 text-orange-50 contact'>
                <div className='fixed background bg-dark animate__animated animate__slideInUp animate__delay-750ms animate__faster'></div>

                {/* Side Nav bar — Contact */}
                <SideNav type='home' theme='dark' />

                {/* left section */}
                <div className='fixed left-10 xxs:left-20 md:left-40 flex w-3/4 xs:w-1/2 lg:w-1/4 h-[60vh] md:h-[100vh] flex-col justify-center items-start left-section'>
                    <div className='mb-[4vh] my-[2vh] overflow-hidden'>
                        <h1 className='text-left animate__animated animate__slideInUp animate__delay-2500ms animate__faster'>Hello.</h1>
                    </div>
                    <div className='overflow-hidden'>
                        <div className='animate__animated animate__slideInUp animate__delay-1500ms animate__faster'>
                            <p className='description'>
                                I can help build your next website. Let me know if you're on-board with having me as your developer!
                                {/* Let me know what you need by filling in this quick&nbsp;
                                <span><a href={creativeBriefForm} target="_blank" rel="noopener noreferrer">website brief</a></span>. */}
                            </p><br />
                            <span>Email: <a href='mailto:mherizpy@gmail.com'>mherizpy@gmail.com</a></span><br />
                            <span>On the web:&nbsp;
                                    <a href='https://www.linkedin.com/in/heriz-yusoff/' target="_blank" rel="noopener noreferrer">LinkedIn</a> /&nbsp; 
                                    <a href='https://github.com/NovemForxuz' target="_blank" rel="noopener noreferrer">Github</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact