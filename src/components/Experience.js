import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Developed and deployed 5+ major features improving user engagement by 40%',
        'Reduced application load time by 60% through optimization',
        'Led a team of 4 developers on critical projects',
        'Implemented CI/CD pipeline reducing deployment time by 75%'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      location: 'Remote',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Built responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Developed 10+ responsive web applications from scratch',
        'Improved code quality by implementing automated testing (Jest, Cypress)',
        'Reduced bug reports by 35% through rigorous testing',
        'Mentored 2 junior developers'
      ],
      technologies: ['React', 'Express', 'PostgreSQL', 'JavaScript', 'Git']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Creative Web Agency',
      location: 'New York, NY',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Created engaging user interfaces and improved website performance. Worked closely with designers to implement pixel-perfect designs.',
      achievements: [
        'Built 15+ client websites with modern frameworks',
        'Achieved 95+ Google Lighthouse scores on all projects',
        'Reduced CSS bundle size by 50% using modern techniques',
        'Implemented responsive designs for mobile-first approach'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Sass']
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'StartUp Solutions',
      location: 'Austin, TX',
      period: '2018 - 2019',
      type: 'Full-time',
      description: 'Assisted in developing web applications and maintaining existing codebases. Gained hands-on experience with modern web technologies.',
      achievements: [
        'Successfully delivered 20+ bug fixes and feature enhancements',
        'Collaborated with senior developers on major projects',
        'Learned and applied best practices in web development',
        'Contributed to improving team workflow efficiency'
      ],
      technologies: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap']
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3>{exp.title}</h3>
                  <div className="company-info">
                    <span className="company">{exp.company}</span>
                    <span className="location">📍 {exp.location}</span>
                  </div>
                </div>
                <div className="experience-meta">
                  <span className="period">{exp.period}</span>
                  <span className="type">{exp.type}</span>
                </div>
              </div>
              
              <p className="description">{exp.description}</p>
              
              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="technologies">
                <strong>Technologies:</strong>
                <div className="tech-tags">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;