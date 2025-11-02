import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
// import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
// import Skills from './sections/Skills/skills';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Theme from './theme/Theme';
import Testimonials from './sections/Skills/skills';
import { useThemeContext } from './context/theme-context';
import ExperienceSection from './sections/portfolio/Experience';

const App = () => {
  const {themeState} = useThemeContext();

  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
        <Navbar/>
        <Header/>
        <About/>
        <ExperienceSection/>
        <Portfolio/>
        {/* <Skills/> */}
        <Testimonials/>
        <Contact/>
        <Footer/>
        <Theme />
    </main>
  )
}

export default App
