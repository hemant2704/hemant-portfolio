import React from 'react'

const Projects = () => {
    const projectDescription = [
        {
            name: 'Notes-App',
            link: 'https://github.com/hemant2704/Notes-app/',
            description: 'Created using JAVA JSP, Servlet, JDBC in backend and mySQL for database. It has user login and register facility. User can save hisnotes and access it. User can edit and delete his notes anytime.'
        },
        {
            name: 'Text Encrypter/Decrypter using Python',
            link: 'https://github.com/hemant2704/encrypter-decrypter',
            description: 'A Simple text encrypter/decrypter following basic techniques like Caesar cipher, Rot-13, Numerical Conversion, and Hashing. '
        },
        {
            name: 'Cryptohub',
            link: 'https://hemant2704.github.io/Cryptohub/',
            description: 'Shows real time crypto-currencies prices, news, daily changes and graphical analysis.'
        },
        {
            name: 'News App',
            link: 'https://github.com/hemant2704/news-app-react',
            description: 'Shows real time news by fetching information from News API'
        },
        {
            name: 'Chat Application',
            link: 'https://github.com/hemant2704/Chat-app/',
            description: 'Chat app using React JS, Node JS, Socket.io for real time messaging. '
        },
        {
            name: 'Weather App',
            link: 'https://hemant2704.github.io/weather_react/',
            description: 'Weather app which displays real time information using openweathermap api. It can also change its background according to warm or cool weather. '
        }
    ];
    return (
        <section className="resume-section" id="project">
            <div className="resume-section-content">
                <h2 className="mb-5">Projects</h2>
                {
                    projectDescription.map(
                        (prj) =>
                            <div className={`d-flex flex-column flex-md-row justify-content-between mb-5`} key={prj.name}>
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">{prj.name}</h3>
                                    <div className="subheading mb-3" style={{textTransform:'lowercase',fontWeight:'lighter'}}><a href={prj.link} target="_blank" rel="noopener noreferrer">{prj.link}</a></div>
                                    <p>{prj.description}</p>
                                </div>
                            </div>
                    )
                }
            </div>
        </section>
    )
}

export default Projects
