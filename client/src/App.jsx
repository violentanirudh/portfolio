import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import TagsContainer from "./components/TagsContainer.jsx"
import Education from "./components/Education.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import Projects from "./components/Projects.jsx"

const skills = ['Communication', 'Problem Solving', 'Team Work', 'Adaptability']
const technology = ['Tailwind', 'JavaScript', 'React', 'NodeJS', 'MongoDB', 'Python', 'SQL', 'Flask']

function App() {
  return (
      <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 h-screen w-screen relative text-slate-200">
          <div className="absolute inset-0 bg-slate-950/60">
              <div className="bg-[url('/graph.png')] bg-repeat min-h-screen relative">
                  <div className="h-screen w-screen overflow-y-scroll">
                      <div className="mx-auto max-w-screen-md px-4 py-10 sm:px-2 space-y-20">
                          <Navbar/>
                          <HeroSection/>
                          <TagsContainer title="Technologies" set={technology}/>
                          <TagsContainer title="Skills" set={skills}/>
                          <Education/>
                          <Projects />
                          <Contact />
                          <Footer />
                          <Outlet/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default App
