import React from 'react'

const Education = () => {
    return (
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Kamla Nehru Institute of technology</h3>
                        <div className="subheading">Bachelor of technology</div>
                        <div className="subheading mb-3">Information technology</div>
                        <p className='text-primary'>CGPA: 9.0</p>
                    </div>
                    <div className="flex-shrink-0">
                        <span className="text-primary">August 2019 - <i>present</i></span>
                        <span className="text-primary"><i><p>Expected to graduate: 2023</p></i></span>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Lucknow public college</h3>
                        <div className="subheading mb-3">Intermediate</div>
                        <p className='text-primary'>Percentage: 96%</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary"><i>2017-2018</i></span></div>
                </div>
            </div>
        </section>
    )
}

export default Education
