import React from 'react';
import { Link } from 'react-scroll';

const Sidebar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link className="navbar-brand js-scroll-trigger" smooth={true} style={{cursor:'pointer'}} to="about">
                <span style={{color:'#ffffff',fontSize:'35px',fontFamily: 'Redressed, cursive'}}>Portfolio</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" style={{ cursor: 'pointer' }} smooth={true} to="about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" style={{ cursor: 'pointer' }} smooth={true} to="skills">Skills</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" style={{ cursor: 'pointer' }} smooth={true} to="experience">Experience</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" style={{ cursor: 'pointer' }} smooth={true} to="project">Projects</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" style={{ cursor: 'pointer' }} smooth={true} to="education">Education</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" style={{ cursor: 'pointer' }} smooth={true} to="certifications">Certifications</Link></li>
                </ul>
            </div>
        </nav>

    )
}

export default Sidebar
