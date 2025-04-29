import React from 'react'

const Home = () => {
    
    return (
        <div>  
            <div className="terminal-section">
                <div className='typing-container'>
                    <h3 className='typing-text'>Personal Profile</h3>
                </div>
                <p>
                    I am currently a student, studying Computer Science at the University of St Andrews on the McIvor-Barrow Scholarship, in my penultimate year. 
                    I am looking for work as a Software Engineer, as I am eager to apply my skills to impactful projects in a professional environment.
                </p>
            </div>
            
            <div className="terminal-section">
                <div className='typing-container'>
                    <h3 className='typing-text'>Education</h3>
                </div>
                
                <h4>BSc Computer Science | St Andrews University | September 2022 – Present</h4>
                <p>Modules graded out of 20 with 16.5+ qualifying for a First Class honours</p>
                
                <div className="education-grid">
                    <div className="education-column">
                        <h5>First Year Modules</h5>
                        <ul>
                            <li>Computer System Fundamentals <span className="grade">17.2</span></li>
                            <li>Object-Oriented Programming <span className="grade">17.8</span></li>
                            <li>Programming Projects <span className="grade">16.8</span></li>
                            <li>Programming with data <span className="grade">17.5</span></li>
                        </ul>
                    </div>
                    <div className="education-column">
                        <h5>Second Year Modules</h5>
                        <ul>
                            <li>Foundations of Computation <span className="grade">16.9</span></li>
                            <li>The Internet and the Web <span className="grade">16.5</span></li>
                            <li>Advanced Programming Projects <span className="grade">18.2</span></li>
                            <li>Computer Systems <span className="grade">17.5</span></li>
                        </ul>
                    </div>
                </div>
                
                <h4>The Royal Belfast Academical Institution (RBAI) | September 2016 – June 2022</h4>
                <p><strong>A-Levels:</strong> Further Mathematics (A*); Mathematics (A*); Physics (A*); Computer Science (A*)</p>
                <p><strong>GCSEs:</strong> 10 A*s including Further Mathematics, Mathematics, Digital Technology, Physics</p>
            </div>

            <div className="terminal-section">
                <div className='typing-container'>
                    <h3 className='typing-text'>Previous Experience</h3>
                </div>
                
                <div className="experience-item">
                    <h4 className="typing-short">P/T Customer Assistant | Tesco | April 2022 – Present</h4>
                    <ul className="experience-list">
                        <li>Serving in this role has honed my interpersonal and communication skills, as I interact daily with a diverse customer base.</li>
                        <li>I have developed a keen ability to understand and address customer needs promptly and effectively, enhancing my problem-solving capabilities.</li>
                    </ul>
                </div>
                
                <div className="experience-item">
                    <h4 className="typing-short">Nuffield Research Placement | June 2021 – July 2021</h4>
                    <ul className="experience-list">
                        <li>Provided an engaging hands-on research project where I had the opportunity to make a meaningful contribution towards the work of the Northern Ireland Centre for Stratified Medicine.</li>
                        <li>This was achieved through independent research collaboration relating to computational biology.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
