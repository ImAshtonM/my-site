import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectCard from './ProjectCard'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ProjectCard 
      projectName="Small 3D House"
      description="UI/UX experiment to test my abilities at creating 3D scenes in CSS"
      overviewLink= ""
      projectLink= ""
      githubLink=""
     />
    </>
  )
}

export default App
