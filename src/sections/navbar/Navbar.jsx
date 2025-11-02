import { useState, useEffect } from 'react';
import data from './data';
import { IoIosColorPalette } from 'react-icons/io';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useModalContext } from '../../context/modal-context';
import './navbar.css';

const Navbar = () => {
  const { showModalHandler } = useModalContext();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = data.map(item => item.link.replace('#', '') || 'header');
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleNavClick = () => {
    setShowMenu(false);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container nav__container">
        {/* Logo */}
        <a href="#header" className='nav__logo'>
          <div className="logo-wrapper">
            <img src="/amy.jpg" alt="Amresh Yadav" />
            <div className="logo-ring"></div>
          </div>
          <span className="logo-text">Amresh</span>
        </a>

        {/* Desktop Menu */}
        <ul className='nav__menu'>
          {data.map(item => {
            const sectionId = item.link.replace('#', '') || 'header';
            const isActive = activeSection === sectionId;
            
            return (
              <li key={item.id}>
                <a 
                  href={item.link} 
                  className={isActive ? 'active' : ''}
                  onClick={handleNavClick}
                >
                  <span className="nav-text">{item.title}</span>
                  <span className="nav-indicator"></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Action Buttons */}
        <div className="nav__actions">
          <button 
            id='theme__icon' 
            onClick={showModalHandler}
            className="icon-btn"
            aria-label="Change theme"
          >
            <IoIosColorPalette />
            <span className="btn-ripple"></span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn icon-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {showMenu ? <HiX /> : <HiMenuAlt3 />}
            <span className="btn-ripple"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${showMenu ? 'show' : ''}`}>
        <div className="mobile-menu-backdrop" onClick={toggleMenu}></div>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <img src="/amy.jpg" alt="Amresh Yadav" />
            </div>
            <h3>Amresh Yadav</h3>
            <p>MERN Stack Developer</p>
          </div>
          
          <ul className='mobile-nav-list'>
            {data.map(item => {
              const sectionId = item.link.replace('#', '') || 'header';
              const isActive = activeSection === sectionId;
              
              return (
                <li key={item.id}>
                  <a 
                    href={item.link}
                    className={isActive ? 'active' : ''}
                    onClick={handleNavClick}
                  >
                    <span className="nav-number">0{item.id}</span>
                    <span className="nav-title">{item.title}</span>
                    <svg className="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-menu-footer">
            <button className="theme-btn-mobile" onClick={() => {
              showModalHandler();
              toggleMenu();
            }}>
              <IoIosColorPalette />
              <span>Change Theme</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;