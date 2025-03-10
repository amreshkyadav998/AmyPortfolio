import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  const experiences = [
    {
      company: "Tech Innovators Inc",
      role: "Senior Frontend Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: "Led development of next-generation web applications using React and Three.js. Improved site performance by 40% through optimization techniques.",
      skills: ["React", "Three.js", "WebGL", "TypeScript"],
      highlights: [
        "Spearheaded migration to Next.js",
        "Mentored junior developers",
        "Implemented 3D visualizations"
      ]
    },
    {
      company: "Digital Dynamics",
      role: "Full Stack Engineer",
      duration: "2020 - 2022",
      location: "New York, NY",
      description: "Architected and developed scalable web solutions for enterprise clients. Specialized in real-time data visualization and interactive user experiences.",
      skills: ["Node.js", "React", "MongoDB", "AWS"],
      highlights: [
        "Built real-time analytics dashboard",
        "Reduced loading time by 60%",
        "Led team of 5 developers"
      ]
    },
    {
      company: "Creative Solutions Lab",
      role: "Frontend Developer",
      duration: "2018 - 2020",
      location: "Boston, MA",
      description: "Created innovative web experiences using cutting-edge technologies. Focused on responsive design and accessibility.",
      skills: ["JavaScript", "CSS3", "HTML5", "Vue.js"],
      highlights: [
        "Developed component library",
        "Implemented A/B testing",
        "Improved accessibility"
      ]
    }
  ];

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#ADD8E6'
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="exp-container">
      <div ref={containerRef} className="exp-three-container" />
      
      <div className="exp-content">
        <h1 className="exp-title">Professional Journey</h1>
        
        <div className="exp-cards">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-card">
              <div className="exp-card-content">
                <div className="exp-card-grid">
                  <div className="exp-company-info">
                    <h2 className="exp-company-name">{exp.company}</h2>
                    <p className="exp-role">{exp.role}</p>
                    <p className="exp-duration">{exp.duration}</p>
                    <p className="exp-location">{exp.location}</p>
                  </div>
                  
                  <div className="exp-experience-info">
                    <p className="exp-description">{exp.description}</p>
                    
                    <div className="exp-skills">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="exp-skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="exp-highlights">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="exp-highlight-item">
                          {highlight}
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
    </div>
  );
};

export default ExperienceSection;
