import React, { Component } from 'react'
import SideNav from './SideNav'

class Contact extends Component {
    render() {
        return (
            <div className='container-2xl h-screen relative bg-[#1a1818] text-orange-50'>
                {/* Side Nav bar — Contact */}
                <SideNav type='home' />

                <h3>Contact</h3>
                <p>
                    I can help design and build your next website. Let me know what you need by filling in this quick&nbsp;
                    <span><a href='https://forms.gle/GUBWa3KSu3Mc5fSa8' target="_blank" rel="noopener noreferrer">website brief</a></span>
                </p>
                <span>Email: <a href='mailto:mherizpy@gmail.com'>mherizpy@gmail.com</a></span><br />
                <span>Socials:&nbsp;
                        <a href='https://www.linkedin.com/in/heriz-yusoff/' target="_blank" rel="noopener noreferrer">LinkedIn</a>/
                        <a href='https://twitter.com/LetItRisk' target="_blank" rel="noopener noreferrer">Twitter</a>/
                        <a href='https://github.com/NovemForxuz' target="_blank" rel="noopener noreferrer">Github</a>
                </span>
                <form>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name'/>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' id='email'/>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' id='message'/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact