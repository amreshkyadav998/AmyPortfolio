import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { HiDownload } from 'react-icons/hi';
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
        <div className="float-icon float-3">{'( )'}</div>
        <div className="float-icon float-4">{'[ ]'}</div>
        <div className="float-icon float-5">{';'}</div>
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

          <p className="header__greeting">Hi, I'm Amresh Yadav</p>

          <h1 className="header__title">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1500,
                'MERN Stack Engineer',
                1500,
                'Competitive Programmer',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <span className="title-gradient-overlay"></span>
          </h1>

          <p className="header__description">
            I'm a software engineer focused on building fast, accessible, and scalable web applications. I turn complex problems into clean, production-ready products — from polished interfaces to reliable backend systems.
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
            <a href="/Amresh_Resume_LOCSR.pdf" download="Amresh_Yadav_Resume.pdf" className="btn btn-secondary">
              <span>Resume</span>
              <HiDownload className="btn-arrow" />
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