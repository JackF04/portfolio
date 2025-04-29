import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    const projects = [
        {
          title: "Portfolio Website",
          description: "A terminal-inspired React portfolio website with animations and responsive design.",
          technologies: ["React", "CSS", "JavaScript"],
          link: "localhost:3000"
        },
        {
          title: "To-Do List App",
          description: "In a team of 2, developed a responsive to-do list web application using React and CSS. Integrated Firebase for real-time data storage and built backend services in Python with custom API endpoints for handling user requests.",
          technologies: ["React", "CSS", "Python", "Firebase", "Netify"],
          link: "https://todolist-rpjf.netlify.app/"
        }
        ,
        {
          title: "Toursim Website Development",
          description: "Designed and developed a WordPress website using Elementor to showcase tourist destinations. Created responsive, user-friendly layouts and managed hosting, domain setup, and backups via Hostinger for optimal performance.",
          technologies: ["WordPress", "Elementor", "Hostinger"],
          link: "https://sureshtours.com"
        },
        {
          title: "Data Analysis with Python",
          description: "Project involved dataset refinement, script creation, unit testing, data analysis and visualization, and executable scripts for automation, working on population data.",
          technologies: ["Python", "NumPy", "Matplotlib", "Pandas"],
          link: null
        }
    ];
  return (
    <div>
      <div className="terminal-section">
            <div className='typing-container'>
                <h3 className='typing-text'>Technical Skills</h3>
            </div>
            
            <div className="skills-container">
                <div className="skills-group">
                    <h4>Development Languages:</h4>
                    <ul className="skills-list">
                        <li><span className="skill-highlight">Good proficiency:</span> Java, Python, Javascript, Kotlin, CSS, SQL</li>
                        <li><span className="skill-highlight">Basic proficiency:</span> C, C++, Assembly Language </li>
                    </ul>
                </div>
                
                <div className="skills-group">
                    <h4>Applications & Libraries:</h4>
                    <ul className="skills-list">
                        <li>React, Node.js, Git, Scikit, torch, Springboot</li>
                        <li>Visual Studio, CodeLite, IntelliJ, Jupyter, Android Studio</li>
                        
                    </ul>
                </div>
            </div>
        </div>

        <div className="terminal-section">
            <div className='typing-container'>
                <h3 className='typing-text'>Projects</h3>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                />
                ))}
            </div>
            
            
        </div>
    </div>
  )
}

export default Projects
