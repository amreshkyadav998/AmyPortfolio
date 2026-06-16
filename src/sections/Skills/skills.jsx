
import './skilss.css'
import Techstack from "./TechStack.js";
import { Container } from "react-bootstrap";


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Skills &amp; Technologies</h2>
      <p>
        The languages, frameworks, and tools I use to design and ship full-stack applications.
      </p>
      <Container fluid className="about-section">

      <Techstack />

      </Container>
    </section>
  )
}

export default Testimonials