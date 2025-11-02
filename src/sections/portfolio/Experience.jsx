import React from 'react';
import './ExperienceSection.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Saarthee",
      role: "Full Stack Developer",
      type: "Summer Intern",
      location: "Gurugram (Onsite)",
      duration: "June 2025 - July 2025",
      technologies: ["React.js", "Tailwind CSS", "Fast API" ,  "Redux Toolkit", "Node.js", "AWS Amplify", "EC2", "S3"],
      achievements: [
        "Spearheaded the development of 10+ reusable frontend components for an algorithmic trading platform, improving load speed by 30%",
        "Collaborated with AI engineers and integrated 15+ RESTful APIs, reducing bug reports by 25%",
        "Engineered a dynamic column-based data matching tool with 95% accuracy for 500+ financial files",
        "Designed modular wealth management dashboard reducing analysis time by 40%",
        "Deployed using AWS Amplify, EC2, and S3, supporting 1,000+ daily file operations"
      ]
    },
    {
      id: 2,
      company: "DraconX",
      role: "Full Stack Developer",
      type: "Summer Intern",
      location: "Remote",
      duration: "March 2025 - May 2025",
      technologies: ["UML", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "React.js", "Amazon S3"],
      achievements: [
        "Contributed to an AI-driven RFP automation platform as Software Development Intern",
        "Built and optimized modules: Proposal Tracking, Compliance Checks, RFP Discovery, and Collaboration Features",
        "Integrated AI APIs for smart drafting, compliance suggestions, and dynamic content generation",
        "Enhanced dashboard performance by 35%, supporting 100+ active users"
      ]
    },
    {
      id: 3,
      company: "FandomX",
      role: "Full Stack Developer",
      type: "Winter Intern",
      location: "Remote",
      duration: "Oct 2024 - Jan 2025",
      technologies: ["React.js", "Tailwind CSS", "JWT", "bcrypt.js", "Zod", "MongoDB", "Node.js", "Express.js", "EmailJS"],
      achievements: [
        "Spearheaded development of FandomX's inaugural web platform with responsive frontend, achieving 80% cross-device compatibility",
        "Implemented secure authentication using JWT, bcrypt.js, and Zod validation, enhancing security by 35%",
        "Enhanced sports-centric platform for ticket booking and venue reservations, improving operational efficiency by 40%",
        "Integrated EmailJS for automated communication, boosting user engagement by 30%"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            My professional journey in full-stack development
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <div className="company-info">
                      <h3 className="company-name">{exp.company}</h3>
                      <span className="intern-badge">{exp.type}</span>
                    </div>
                    <p className="role-title">{exp.role}</p>
                    <div className="meta-info">
                      <span className="duration">
                        <svg className="icon" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                        </svg>
                        {exp.duration}
                      </span>
                      <span className="location">
                        <svg className="icon" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="technologies">
                    <h4 className="tech-title">Technologies:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="achievements">
                    <h4 className="achievements-title">Key Achievements:</h4>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="achievement-item">
                          <span className="bullet">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;