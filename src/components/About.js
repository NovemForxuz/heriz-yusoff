import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {

    return (
        <div>
            <h3>About</h3>
            <ul>
                <li><Link to='/project'>Project</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default About