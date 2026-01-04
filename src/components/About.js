import React from 'react';
import './About.css';

function About() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Git', level: 85 }
  ];

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate full-stack developer with a love for creating 
            beautiful, functional, and user-friendly websites and applications. 
            With several years of experience in web development, I specialize 
            in building modern web applications using the latest technologies.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or sharing my knowledge 
            through blog posts and tutorials.
          </p>
          <p>
            I believe in writing clean, maintainable code and following best 
            practices to deliver high-quality solutions that make a difference.
          </p>
        </div>

        <div className="skills-container">
          <h3>My Skills</h3>
          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="stat-item">
          <h3>50+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-item">
          <h3>3+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-item">
          <h3>30+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Support</p>
        </div>
      </div>
    </section>
  );
}

export default About; 