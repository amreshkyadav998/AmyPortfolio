import HeaderImage from '../../assets/a1.png';
import data from './data';
import './header.css';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__socials">
          {data.map(item => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
        <div className="header__content">
          <h4 className="typewriter">
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
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h4>
          <p>
            Hello and welcome to my portfolio site! I'm Amresh Yadav, a dedicated MERN stack developer with a knack for crafting innovative web solutions. Dive into my projects to see how I've tackled various challenges and created impactful applications. Let's connect and explore the possibilities!
          </p>
          <div className="header__cta">
            <a href="#contact" className="btn primary">Let's Talk</a>
            <a href="#portfolio" className="btn light">My Work</a>
          </div>
        </div>
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
      </div>
    </header>
  );
};

export default Header;
