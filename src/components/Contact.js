import React, { Component } from 'react'
import SideNav from './SideNav'

class Contact extends Component {
    render() {
        return (
            <div className='container-2xl h-screen relative bg-[#1a1818] text-orange-50 contact'>
                {/* Side Nav bar — Contact */}
                <SideNav type='home' theme='dark' />

                {/* left section */}
                <div className='fixed left-40 flex w-1/4 h-[100vh] flex-col justify-center items-start left-section'>
                    <div className='mb-[2vh]'>
                        <h1 className='text-left my-[2vh]'>Hello.</h1>
                    </div>
                    <p className='description'>
                        I can help build your next website. Let me know what you need by filling in this quick&nbsp;
                        <span><a href='https://forms.gle/GUBWa3KSu3Mc5fSa8' target="_blank" rel="noopener noreferrer">website brief</a></span>.
                    </p><br />
                    <span>Email: <a href='mailto:mherizpy@gmail.com'>mherizpy@gmail.com</a></span><br />
                    <span>Socials:&nbsp;
                            <a href='https://www.linkedin.com/in/heriz-yusoff/' target="_blank" rel="noopener noreferrer">LinkedIn</a> /&nbsp; 
                            <a href='https://twitter.com/LetItRisk' target="_blank" rel="noopener noreferrer">Twitter</a> /&nbsp;
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