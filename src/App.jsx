
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
// import Qualification from './components/qualification/Qualification'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main className='main'>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        {/* <Qualification></Qualification> */}
        <Portfolio></Portfolio>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default App
