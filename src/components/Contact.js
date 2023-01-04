import React, { Component } from 'react'

class Contact extends Component {
    render() {
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