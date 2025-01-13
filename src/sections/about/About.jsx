import AboutImage from '../../assets/a1.png'
// import resume from '../../assets/resume1.pdf'   uncomment it
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
                        <img src={AboutImage} alt="About Image" />
                    </div>
                </div>
                <div className="about__right">
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
                        On a web development odyssey for a year, perpetually growing wiser, and striving to surpass myself every day.
                    </p>
                    <p>
                        Hi, I'm Amresh Yadav, a dedicated MERN Stack web developer currently pursuing a B.Tech in Electronics and Communication Engineering. With a commitment to excellence and a patient approach, I've successfully completed a range of projects and gained valuable industry insights. I am eager to apply my skills and contribute to innovative projects. Feel free to review my resume and let's discuss how I can be an asset to your team!</p>
                    <a href={resume} download className='btn primary'>Download Resume <HiDownload /></a>
                </div>
            </div>
        </section>
    )
}

export default About;

