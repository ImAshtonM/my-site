import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from "./Projects"
import ProjectCard from './ProjectCard'
import Header from './Header'
import Hero from './Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center items-center gap-4">
        <Hero />
        <div id="projects" className="flex flex-wrap items-stretch justify-center gap-4">
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
      </main>

    </>
  )
}

export default App
