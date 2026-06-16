// import AboutImage from '../../assets/a1.png'
// import resume from '../../assets/resume1.pdf'   
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
    return (
        <section id="about">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src="/amy.jpg" alt="Amresh Yadav" />
                    </div>
                </div>
                <div className="about__right">
                    <span className="about__eyebrow">Get to know me</span>
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.Desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>
                        I'm Amresh Yadav, a Full Stack / MERN developer who graduated from IIIT Ranchi with a B.Tech in Electronics &amp; Communication Engineering, finishing with a 9.59 CGPA. I'm currently a Software Engineer Intern at Ocrolus, where I build production-grade interfaces and microservice-backed internal tools.
                    </p>
                    <p>
                        I care about clean architecture, thoughtful UX, and shipping reliable software. Across internships and personal projects, I've worked end to end — from designing responsive React frontends to building performant APIs. Take a look at my resume and let's talk about how I can add value to your team.
                    </p>
                    <a href="/Amresh_Updated_Resume_W_G_OG1.pdf" download className='btn primary'>Download Resume <HiDownload /></a>
                </div>
            </div>
        </section>
    )
}

export default About;

//add 35 line for resume instead of 36

