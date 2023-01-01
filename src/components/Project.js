import React from 'react'
import { Link } from 'react-router-dom'

const Project = (props) => {

    return (
        <div>
            <h3>Project</h3>
            <ul>
                <li><Link to='/project'>Project</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Project