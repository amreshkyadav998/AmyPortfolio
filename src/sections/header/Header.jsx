import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import data from './data';
import './header.css';

const Header = () => {

  return (
    <header id="header">
      {/* Animated Background */}
      <div className="header__background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="float-icon float-1">{'{ }'}</div>
        <div className="float-icon float-2">{'</>'}</div>
        <div className="float-icon float-3">{'<>'}</div>
        <div className="float-icon float-4">{'⚡'}</div>
        <div className="float-icon float-5">{'🚀'}</div>
      </div>

      <div className="container header__container">
        <div className="header__socials">
          {data.map(item => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="social-icon">{item.icon}</span>
              <span className="social-ripple"></span>
            </a>
          ))}
        </div>

        <div className="header__content">
          <div className="header__badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Available for opportunities</span>
          </div>

          <h1 className="header__title">
            <TypeAnimation
              sequence={[
                'Myself Amresh Yadav',
                1000,
                'I am MERN Stack Developer',
                1000,
                'I am Competitive Programmer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <span className="title-gradient-overlay"></span>
          </h1>

          <p className="header__description">
            Hello and welcome to my portfolio site! I'm Amresh Yadav, a dedicated MERN stack developer with a knack for crafting innovative web solutions. Dive into my projects to see how I've tackled various challenges and created impactful applications.
          </p>

          <div className="header__cta">
            <a href="#contact" className="btn btn-primary">
              <span>Let's Talk</span>
              <span className="btn-shine"></span>
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              <span>My Work</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="tech-stack">
            <span className="tech-pill">React</span>
            <span className="tech-pill">Node.js</span>
            <span className="tech-pill">MongoDB</span>
            <span className="tech-pill">Express</span>
          </div>
        </div>

        <div className="header__profile-wrapper">
          <div className="profile-ring ring-1"></div>
          <div className="profile-ring ring-2"></div>
          <div className="profile-ring ring-3"></div>
          <div className="header__profile">
            <img src="/amy.jpg" alt="Amresh Yadav" />
            <div className="profile-glow"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div> */}
    </header>
  );
};

export default Header;