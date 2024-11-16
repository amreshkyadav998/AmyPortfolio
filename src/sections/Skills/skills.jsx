
import './skilss.css'
import Techstack from "./TechStack.js";
import { Container, Row, Col } from "react-bootstrap";


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Skills</h2>
      <Container fluid className="about-section">
      
      <Techstack />

      </Container>
    </section>
  )
}

export default Testimonials