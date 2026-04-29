import React from 'react'

const Home = () => {
    
    return (
        <div>  
            <div className="terminal-section">
                <div className='typing-container'>
                    <h3 className='typing-text'>Personal Profile</h3>
                </div>
                <p>
                    Final-year Computer Science student and McIvor-Barrow Scholar at the University of St Andrews. 
                    Recently completed an internship in Private Banking, combining theory with practical application 
                    in a high-stakes financial environment. Driven to continue expanding my technical knowledge
                    and apply my engineering skills.
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
                        <h5>Second Year Modules</h5>
                        <ul>
                            <li>Foundations of Computation <span className="grade">16.9</span></li>
                            <li>The Internet and the Web <span className="grade">16.5</span></li>
                            <li>Advanced Programming Projects <span className="grade">18.2</span></li>
                            <li>Computer Systems <span className="grade">17.5</span></li>
                        </ul>
                    </div>
                    <div className="education-column">
                        <h5>Third Year Modules</h5>
                        <ul>
                            <li>Software Engineering Project <span className="grade">16.7</span></li>
                            <li>Databases <span className="grade">17.9</span></li>
                            <li>Operating Systems <span className="grade">16.5</span></li>
                            <li>Component Technology <span className="grade">17.2</span></li>
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
                    <h4 className="typing-short">Technology Developer Intern | Barclays | June 2025 – August 2025</h4>
                    <ul className="experience-list">
                        <li>Contributed to enhancing developer workflows as part of the Engineering Excellence team.</li>
                        <li>Engaged in DevOps practices, designing and refining CI/CD pipelines in Gitlab. Implemented workflow automation and “shift-left” approaches to optimise KPIs such as lead time.</li>
                    </ul>
                </div>
                
                <div className="experience-item">
                    <h4 className="typing-short">P/T Customer Assistant | Tesco | April 2022 – April 2026</h4>
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
