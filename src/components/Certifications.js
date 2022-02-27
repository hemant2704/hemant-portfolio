import React from 'react'

const Certifications = () => {
    const certifications = [
        {
            title:'Python for Everybody Specialization',
            date:'06/2020',
            organisation:'University of Michigan (Coursera)'
        },
        {
            title:'Using Python to interact with Operating System',
            date:'07/2020',
            organisation:'Google (Coursera)'
        },
        {
            title:'Introduction to Cybersecurity',
            date:'12/2020',
            organisation:'Cisco Networking Academy'
        },
        {
            title:'Interactivity with Javascript',
            date:'06/2020',
            organisation:'University of Michigan (Coursera)'
        },
    ];
    return (
        <section className="resume-section" id="certifications">
            <div className="resume-section-content">
                <h2 className="mb-5">Certifications</h2>
                    {
                        certifications.map(certificate=>
                            <div className={`d-flex flex-column flex-md-row justify-content-between mb-5`} key={certificate.title}>
                                <div className="flex-grow-1">
                                    <h3 className="subheading mb-0">{certificate.title}</h3>
                                    <p className="mb-3 text-primary"><i>{certificate.organisation}</i></p>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary"><i>{certificate.date}</i></span></div>
                            </div>
                        )
                    }
                
            </div>
        </section>
    )
}

export default Certifications
