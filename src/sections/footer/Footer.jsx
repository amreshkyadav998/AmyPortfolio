import {links, socials} from './data'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <a href="#header" className="footer__logo">Amresh<span>Yadav</span></a>

        <ul className='footer__menu'>
          {
            links.map(fLink => <li key={fLink.id}><a href={fLink.link}>{fLink.title}</a></li>)
          }
        </ul>

        <div className="footer__socials">
          {
            socials.map(social => <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">{social.icon}</a>)
          }
        </div>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Amresh Yadav. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;
