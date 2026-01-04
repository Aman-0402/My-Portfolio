import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A full-featured online shopping platform with payment integration and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/400x300/6366f1/ffffff?text=E-Commerce',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      description: 'Collaborative task management tool with real-time updates and team features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Task+Manager',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'web',
      description: 'Beautiful weather application with forecast data and location-based services.',
      technologies: ['React', 'API Integration', 'Chart.js'],
      image: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Weather+App',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'design',
      description: 'Modern portfolio website with smooth animations and responsive design.',
      technologies: ['React', 'CSS3', 'Animations'],
      image: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Portfolio',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      category: 'web',
      description: 'Content management system with markdown support and SEO optimization.',
      technologies: ['React', 'Next.js', 'Prisma'],
      image: 'https://via.placeholder.com/400x300/ef4444/ffffff?text=Blog+Platform',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Mobile App Design',
      category: 'design',
      description: 'UI/UX design for a fitness tracking mobile application.',
      technologies: ['Figma', 'UI/UX', 'Prototyping'],
      image: 'https://via.placeholder.com/400x300/06b6d4/ffffff?text=Mobile+Design',
      github: '#',
      demo: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
          onClick={() => setFilter('web')}
        >
          Web Apps
        </button>
        <button 
          className={`filter-btn ${filter === 'design' ? 'active' : ''}`}
          onClick={() => setFilter('design')}
        >
          Design
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;