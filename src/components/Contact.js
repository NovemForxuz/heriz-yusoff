import React, { Component } from 'react'
import SideNav from './SideNav'

class Contact extends Component {
    render() {
        const creativeBriefForm = 'https://forms.gle/GUBWa3KSu3Mc5fSa8'
        return (
            <div className='container-2xl h-screen relative bg-[#1a1818] text-orange-50 contact'>
                {/* Side Nav bar — Contact */}
                <SideNav type='home' theme='dark' />

                {/* left section */}
                <div className='fixed left-10 xxs:left-20 md:left-40 flex w-3/4 xs:w-1/2 lg:w-1/4 h-[60vh] md:h-[100vh] flex-col justify-center items-start left-section'>
                    <div className='mb-[2vh]'>
                        <h1 className='text-left my-[2vh]'>Hello.</h1>
                    </div>
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
                
                {/* right section */}
                {/* <div className='relative inset-y-0 left-auto float'>
                    <form>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' id='name'/>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' id='email'/>
                        <label htmlFor='message'>Message</label>
                        <textarea name='message' id='message'/>
                        <button>Submit</button>
                    </form>
                </div> */}
                
            </div>
        )
    }
}

export default Contact