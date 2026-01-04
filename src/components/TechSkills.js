import React from 'react';
import './TechSkills.css';

function TechSkills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 'Expert', icon: '⚛️' },
        { name: 'JavaScript', level: 'Expert', icon: '🟨' },
        { name: 'HTML5', level: 'Expert', icon: '🌐' },
        { name: 'CSS3', level: 'Expert', icon: '🎨' },
        { name: 'TypeScript', level: 'Advanced', icon: '📘' },
        { name: 'Tailwind CSS', level: 'Advanced', icon: '💨' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 'Advanced', icon: '🟢' },
        { name: 'Express', level: 'Advanced', icon: '⚡' },
        { name: 'Python', level: 'Intermediate', icon: '🐍' },
        { name: 'MongoDB', level: 'Advanced', icon: '🍃' },
        { name: 'PostgreSQL', level: 'Intermediate', icon: '🐘' },
        { name: 'REST API', level: 'Expert', icon: '🔌' }
      ]
    },
    {
      category: 'Tools & Other',
      skills: [
        { name: 'Git', level: 'Expert', icon: '📦' },
        { name: 'Docker', level: 'Intermediate', icon: '🐳' },
        { name: 'AWS', level: 'Intermediate', icon: '☁️' },
        { name: 'Firebase', level: 'Advanced', icon: '🔥' },
        { name: 'Figma', level: 'Advanced', icon: '🎯' },
        { name: 'VS Code', level: 'Expert', icon: '💻' }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'Expert':
        return '#10b981';
      case 'Advanced':
        return '#6366f1';
      case 'Intermediate':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  return (
    <section id="tech-skills" className="tech-skills">
      <h2>Tech Skills</h2>
      
      <div className="skills-categories">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <span 
                      className="skill-level" 
                      style={{ color: getLevelColor(skill.level) }}
                    >
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tech-stack-summary">
        <h3>Tech Stack Overview</h3>
        <div className="tech-badges">
          <span className="tech-badge">React</span>
          <span className="tech-badge">Node.js</span>
          <span className="tech-badge">MongoDB</span>
          <span className="tech-badge">Express</span>
          <span className="tech-badge">JavaScript</span>
          <span className="tech-badge">TypeScript</span>
          <span className="tech-badge">Git</span>
          <span className="tech-badge">Docker</span>
          <span className="tech-badge">AWS</span>
          <span className="tech-badge">Tailwind CSS</span>
          <span className="tech-badge">PostgreSQL</span>
          <span className="tech-badge">Firebase</span>
        </div>
      </div>
    </section>
  );
}

export default TechSkills;