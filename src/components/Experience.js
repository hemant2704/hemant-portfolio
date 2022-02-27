import React from 'react'

const Experience = () => {
    const experience = [
        {
            title:'Frontend Developer Intern',
            date:'12/2021-present',
            organisation:'Ample AI',
            details:'Building front-end UI using React JS and Material UI framework.'
        },
    ];
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                    {
                        experience.map(exp=>
                            <div className={`d-flex flex-column flex-md-row justify-content-between mb-5`} key={exp.title}>
                                <div className="flex-grow-1">
                                    <h3 className="subheading mb-0">{exp.title}</h3>
                                    <h4 className="mb-1 text-primary">{exp.organisation}</h4>
                                    <p className="mb-3 text-primary"><i>{exp.details}</i></p>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary"><i>{exp.date}</i></span></div>
                            </div>
                        )
                    }
                
            </div>
        </section>
    )
}

export default Experience
