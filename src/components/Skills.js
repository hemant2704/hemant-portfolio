import React from 'react'
import CodingPlatforms from './CodingPlatforms';

const Skills = () => {
    const skillCollection = ['java', 'python', 'html5', 'css3', 'js', 'react', 'node', 'git'];
    return (
        <section className="subheading resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <div className='row'>
                    {
                        skillCollection.map(skill =>
                            <h3 className='m-3' key={skill}><span className="badge badge-info" style={{fontWeight:'lighter'}}><i className={`fab fa-${skill}`}></i>{"  "}{skill}</span></h3>
                        )
                    }
                    <h3 className='m-3'><span className="badge badge-info" style={{fontWeight:'lighter'}}><i className={`fas fa-terminal`}></i>{"  "}BASH</span></h3>
                    <h3 className='m-3'><span className="badge badge-info" style={{fontWeight:'lighter'}}><i className={`fas fa-database`}></i>{"  "}SQL</span></h3>
                </div>

                <CodingPlatforms />
            </div>
        </section>
    )
}

export default Skills
