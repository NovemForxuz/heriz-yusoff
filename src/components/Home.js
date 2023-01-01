import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {

    return (
        <div>
            <h3>HERIZ YUSOFF</h3>
            <p>
                Aspiring Software Engineer and Frontend Web Developer
            </p>
            <p>
                Currently a final year student at Nanyang Technological University
            </p>
            <ul>
                <li><Link to='/project'>Project</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Home