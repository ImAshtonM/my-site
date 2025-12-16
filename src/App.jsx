import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from "./Projects"
import ProjectCard from './ProjectCard'
import Header from './Header'
import Hero from './Hero'
import TechStack from './TechStack'

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
        <div id="projects" className="flex flex-col items-start gap-4">
          <div id="wordPress" className="flex flex-col gap-4">
            <h3 className="text-left text-xl font-bold ">WordPress Projects</h3>
            <div className="flex flex-wrap items-start justify-start gap-4">
              {Projects.map((project) => {
                if (project["tags"].includes("WordPress")) {
                  return (
                    <ProjectCard
                    projectName= {project.name}
                    description= {project.description}
                    projectLink= {project.projectLink}
                    githubLink= {project.githubLink}
                    />
                  )
                }
              })}
            </div>
          </div>
          <div id="uiExperiments" className="flex flex-col gap-4">
            <h3 className="text-left text-xl font-bold ">UI/UX Experiments: 3D CSS</h3>
            <div className="flex flex-wrap items-start justify-start gap-4">
              {Projects.map((project) => {
                if (project["tags"].includes("3D CSS")) {
                  return (
                    <ProjectCard
                    projectName= {project.name}
                    description= {project.description}
                    projectLink= {project.projectLink}
                    githubLink= {project.githubLink}
                    />
                  )
                }
              })}
            </div>
          </div>
          {/* Section below won't be needed until workout tracker app is completed */}
          {/* <div id="fullStack" className="flex flex-col gap-4">
            <h3 className="text-left text-xl font-bold ">Full Stack/ In Development</h3>
            <div className="flex flex-wrap items-start justify-start gap-4">
              {Projects.map((project) => {
                if (project["tags"].includes("Full Stack")) {
                  return (
                    <ProjectCard
                    projectName= {project.name}
                    description= {project.description}
                    projectLink= {project.projectLink}
                    githubLink= {project.githubLink}
                    />
                  )
                }
              })}
            </div>
          </div> */}
        </div>
        {/* Add an "Upcoming Projects" section to showcase progress in the workout tracker app. Can have blog like updates covering what's been done and new techniques learnt.  */}
        {/* Tech Stack */}
        <TechStack />
        {/* Services */}
        {/* Contact Section */}
      </main>

    </>
  )
}

export default App
