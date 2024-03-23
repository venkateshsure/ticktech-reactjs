import {Link} from 'react-router-dom'

import './index.css'

const Header =()=>{
    return (
        <div className="header">
        <div className="header-con">
           <div className="header-fir-con">
                <p>Venkatesh</p>
           </div>
           <div className='header-sec-con'>
                <p><Link className='nav-link' to="/">Home</Link></p>
                <p><Link className='nav-link' to="/about">About</Link></p>
                <p><Link className='nav-link' to="/resume">Resume</Link></p>
                <p><Link className='nav-link'  to="/skills">Skills</Link></p>
                <p><Link className='nav-link'  to="/projects">Projects</Link></p>
                <p><Link className='nav-link' to="/contact">Contact</Link></p>
           </div>
        </div>
        </div>
    )
}

export default Header