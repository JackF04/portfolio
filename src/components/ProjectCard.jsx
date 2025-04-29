import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, technologies, link, githubLink }) => {
  return (
    <div className="project-card">
      <h4 className="project-title typing-short">{title}</h4>
      <div className="project-content">
        <p className="project-description">{description}</p>
        <div className="project-tech">
          <h5>Technologies:</h5>
          <ul className="tech-list">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="project-links">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              View <span className="link-arrow">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
