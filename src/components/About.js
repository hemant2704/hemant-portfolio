import React from 'react'

const About = () => {
    return (
        <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Hemant{" "}
                        <span className="text-primary">Singh</span>
                    </h1>
                    <div className="subheading mb-4" style={{textTransform:'lowercase'}}>
                        8009126892 ·{"  "}
                        <a href="mailto:hemant27042002@gmail.com" target="_blank" rel="noopener noreferrer">hemant27042002@gmail.com</a>
                        {"  ·    "}
                        <a href='https://drive.google.com/file/d/1Wn_6P_qsQwr_OPq9hgeyL4clYxUZL_8l/view?usp=drivesdk' target="_blank" rel="noopener noreferrer"><i>resume</i></a>
                    </div>
                    <p className="lead mb-5">Insightful, reliable, and focused Information Technology student with strong foundation in mathematics, problem solving and programming.</p>
                    
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/hemant-singh-75022719b" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/hemant2704" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </div>
                </div>
        </section>
    )
}

export default About
