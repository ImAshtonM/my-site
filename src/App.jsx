import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from "./Projects"
import ProjectCard from './ProjectCard'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center items-start gap-4">
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
      </main>

    </>
  )
}

export default App
