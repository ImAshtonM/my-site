import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from "./Projects"
import ProjectCard from './ProjectCard'
import Header from './Header'
import Hero from './Hero'

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center items-center gap-4">
        <Hero 
          pageTitle = "Ashton Montgomery | Developer"
          pageSubTitle = "Solving real world problems through software"
          heroCTA = "I need to come up with a good CTA"
          heroCTALink = "Link to form"
          heroImage = ""
          heroImageAlt = "Alternate text for the hero image"
        />
        {/* Site Directions from last site design(clickable links) or modify site based on users choice? */}
        <div id="projects" className="flex flex-wrap items-start justify-center gap-4">
          {Projects.map((project) => {
            return (
              <ProjectCard
              projectName= {project.name}
              description= {project.description}
              projectLink= {project.projectLink}
              githubLink= {project.githubLink}
              />
            )
          })}
        </div>
        {/* Tech Stack */}
        {/* Services */}
        {/* Contact Section */}
      </main>

    </>
  )
}

export default App
