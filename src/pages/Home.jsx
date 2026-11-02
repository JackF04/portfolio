import React from 'react'
import { usePageMeta } from '../hooks/usePageMeta'

const Home = () => {
    usePageMeta(
        'Jack Fernando: Portfolio',
        'Jack Fernando — Technology Developer and Olympic weightlifter. Portfolio of software projects and competition results.'
    );

    return (
        <div>
            <div className="terminal-section">
                <div className='typing-container'>
                    <h3 className='typing-text'>Profile</h3>
                </div>
                <p>
                    Technology Developer at Barclays Investment Bank. Recently graduated with a 
                    BSc with First Class Honours in Computer Science from The University of St Andrews, 
                    under the prestigious McIvor Barrow Scholarship.
                </p>
            </div>

            <div className="terminal-section">
                <div className='typing-container'>
                    <h3 className='typing-text'>Experience</h3>
                </div>

                <div className="experience-item">
                    <h4 className="experience-heading">
                        <span className="experience-role">Technology Developer</span>
                        <span className="experience-sep">|</span>
                        <span className="experience-employer">Barclays Investment Bank</span>
                        <span className="experience-sep">|</span>
                        <span className="experience-date">August 2026 – Current</span>
                    </h4>
                    <ul className="experience-list">
                        <li>Developer on the Barclays Trade Capture & Enrichment Platform</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h4 className="experience-heading">
                        <span className="experience-role">Technology Developer Intern</span>
                        <span className="experience-sep">|</span>
                        <span className="experience-employer">Barclays Private Bank</span>
                        <span className="experience-sep">|</span>
                        <span className="experience-date">June 2025 – August 2025</span>
                    </h4>
                    <ul className="experience-list">
                        <li>Contributed to enhancing developer workflows as part of the Engineering Excellence team.</li>
                        <li>Engaged in DevOps practices, designing and refining CI/CD pipelines in Gitlab. Implemented workflow automation and "shift-left" approaches to optimise KPIs such as lead time.</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h4 className="experience-heading">
                        <span className="experience-role">P/T Customer Assistant</span>
                        <span className="experience-sep">|</span>
                        <span className="experience-employer">Tesco</span>
                        <span className="experience-sep">|</span>
                        <span className="experience-date">April 2022 – April 2026</span>
                    </h4>
                    <ul className="experience-list">
                        <li>Serving in this role has honed my interpersonal and communication skills, as I interact daily with a diverse customer base.</li>
                        <li>I have developed a keen ability to understand and address customer needs promptly and effectively, enhancing my problem-solving capabilities.</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h4 className="experience-heading">
                        <span className="experience-role">Nuffield Research Placement</span>
                        <span className="experience-sep">|</span>
                        <span className="experience-employer">Nuffield Health</span>
                        <span className="experience-sep">|</span>
                        <span className="experience-date">June 2021 – July 2021</span>
                    </h4>
                    <ul className="experience-list">
                        <li>Provided an engaging hands-on research project where I had the opportunity to make a meaningful contribution towards the work of the Northern Ireland Centre for Stratified Medicine.</li>
                        <li>This was achieved through independent research collaboration relating to computational biology.</li>
                    </ul>
                </div>
            </div>

            <div className="terminal-section">
                <div className='typing-container'>
                    <h3 className='typing-text'>Education</h3>
                </div>

                <h4>BSc Computer Science | St Andrews University | First Class Honours</h4>
                <p>Modules graded out of 20 with 16.5+ qualifying for a First Class honours</p>

                <div className="education-grid">
                    <div className="education-column">
                        <h5>Third Year Modules</h5>
                        <ul>
                            <li>Software Engineering Project <span className="grade">16.7</span></li>
                            <li>Databases <span className="grade">17.9</span></li>
                            <li>Operating Systems <span className="grade">16.5</span></li>
                            <li>Component Technology <span className="grade">17.2</span></li>
                        </ul>
                    </div>

                    <div className="education-column">
                        <h5>Final Year Modules</h5>
                        <ul>
                            <li>Dissertation <span className="grade">18.8</span></li>
                            <li>Critical Systems Engineering <span className="grade">19.0</span></li>
                            <li>Signal Processing <span className="grade">19.2</span></li>
                            <li>Machine Learning <span className="grade">16.9</span></li>
                        </ul>
                    </div>
                </div>

                <h4>The Royal Belfast Academical Institution (RBAI)</h4>
                <p><strong>A-Levels:</strong> Further Mathematics (A*); Mathematics (A*); Physics (A*); Computer Science (A*)</p>
                <p><strong>GCSEs:</strong> 10 A*s including Further Mathematics, Mathematics, Digital Technology, Physics</p>
            </div>

            
        </div>
    )
}

export default Home
