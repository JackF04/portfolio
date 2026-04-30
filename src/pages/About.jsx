import React from 'react'
import './About.css' // We'll create this file for specific About page styling

const About = () => {
  return (
    <div>
      <div className="terminal-section about-section">
        <div className='typing-container'>
            <h3 className='typing-text'>About Me</h3>
        </div>
        
        <div className="about-content">
          <div className="profile-image-container">
            <img 
              src="/profile-photo.jpg"
              alt="Jack Fernando" 
              className="profile-image"
            />
            <div className="image-frame"></div>
          </div>
          
          <div className="about-text">
            <p>
              I am currently a student, studying Computer Science at the University of St Andrews on the McIvor-Barrow Scholarship, in my final year.
            </p>
            
            <p>
              I am eager to apply my skills to impactful projects in a professional environment.
            </p>
            
            <p>
              Having grown up in Sri Lanka, my passion for technology began when I was young, as I 
              witnessed the impact technology had on my local neighbourhood. This curiosity evolved 
              into a deep interest when I moved to the UK, where I was exposed to Computer Science.
            </p>
            
            <p>
              Outside of academics, I enjoy Olympic Weightlifting. I was President of the St Andrews
              Weightlifting Club in my third year, and I currently hold a first place ranking in Scotland,
              and hold a Scottish Universities record in the 67kg weight class. I also enjoy playing cricket,
              and played for the St Andrews First XI team in my first year.
            </p>
          </div>
        </div>

        <div className="connect-section">
          <h4>Connect With Me</h4>
          <div className="social-links">
            <a href="https://github.com/JackF04" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://linkedin.com/in/jack-fernando" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="mailto:fernandojack14@gmail.com" className="social-link">Email</a>
            <a href="/JackFernandoCV.pdf" download className="social-link cv-link">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
