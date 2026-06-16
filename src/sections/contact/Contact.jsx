import contacts from './data'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Let's Work Together</h2>
      <p>
        Have a project in mind, a role to fill, or just want to say hello? I'm one message away — let's build something great.
      </p>
      <div className="container contact__container">
        <a href="mailto:amresh.2022ug2028@iiitranchi.ac.in" className="contact__cta btn primary">
          Get in touch
        </a>
        <div className="contact__socials">
          {
            contacts.map(contact => (
              <a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.name}
                className="contact__social"
              >
                <span className="contact__social-icon">{contact.icon}</span>
                <span className="contact__social-name">{contact.name}</span>
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Contact
