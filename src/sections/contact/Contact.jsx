import contacts from './data'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Want to Connect</h2>
      <p>
        Waiting for your response
      </p>
      <div className="container contact__container">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact