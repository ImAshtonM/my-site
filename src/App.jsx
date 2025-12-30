import { useState } from 'react'
import './App.css'
import Projects from "./Projects"
import ProjectCard from './ProjectCard'
import Header from './Header'
import Hero from './Hero'
import TechStack from './TechStack'
import Services from './Services'
import Footer from './Footer'
import ServiceWizard from './ServiceWizard'

function App() {

  const [siteMode, setSiteMode] = useState(null)
  const [wizardAnswers, setWizardAnswers] = useState({
    intent: "",
    context: "",
    focus: "",
    constraints: [],
    readiness: "",
  })
  const setAnswer = (key, value) => {setWizardAnswers((prev) => ({...prev,[key]:value,}))}
  

  return (
    <>
      <Header onResetSiteMode={() => setSiteMode(null)} currentSiteMode={siteMode}/>
      <main className="mx-auto max-w-7xl  px-4 flex flex-wrap justify-center items-center gap-4">
        { siteMode === "W2" && (
          <>
            <Hero 
            pageTitle = "Ashton Montgomery"
            pageSubTitle = "Frontend-focused software engineer building adaptive, data-driven interfaces and automated tools"
            support = "I focus on frontend systems that respond to user intent, application state, and real-world constraints — not static layouts."
            heroCTA = "Let’s look at some of my Projects!"
            heroCTALink = "#projects"
            ctaLinkText = "Projects"
            heroImage = ""
            heroImageAlt = "Alternate text for the hero image"
            />
            <section id="projects" className="flex flex-col items-start gap-4">
              <div id="wordPress" className="flex flex-col gap-4">
                <h2 className="text-left text-xl font-bold text-[var(--brand-color)] ">WordPress Projects</h2>
                <div className="flex flex-wrap items-start justify-center md:justify-start gap-4">
                  {Projects.map((project, key) => {
                    if (project["tags"].includes("WordPress")) {
                      return (
                        <ProjectCard
                        projectName= {project.name}
                        description= {project.description}
                        projectLink= {project.projectLink}
                        githubLink= {project.githubLink}
                        key= {key}
                        />
                      )
                    }
                  })}
                </div>
              </div>
              <div id="uiExperiments" className="flex flex-col gap-4">
                <h2 className="text-left text-xl font-bold text-[var(--brand-color)] ">UI/UX Experiments: 3D CSS</h2>
                <div className="flex flex-wrap items-start justify-center md:justify-start gap-4">
                  {Projects.map((project, key) => {
                    if (project["tags"].includes("3D CSS")) {
                      return (
                        <ProjectCard
                        projectName= {project.name}
                        description= {project.description}
                        projectLink= {project.projectLink}
                        githubLink= {project.githubLink}
                        key= {key}
                        />
                      )
                    }
                  })}
                </div>
              </div>
              {/* Section below won't be needed until workout tracker app is completed */}
              {/* <div id="fullStack" className="flex flex-col gap-4">
                    <h2 className="text-left text-xl font-bold ">Full Stack/ In Development</h2>
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
              {/* Add an "Upcoming Projects" section to showcase progress in the workout tracker app. Can have blog like updates covering what's been done and new techniques learnt.  */}
          </section>
          <TechStack />
        </>
          )
        }
        { siteMode === "Freelance" && (
           <> 
            <Hero 
            pageTitle = "Sites that adapt to your users — and your goals"
            pageSubTitle = "I’m Ashton Montgomery, I build websites and internal tools that adjust to user behavior, business needs, and real-world workflows — so your site works with your customers, not against them."
            support = ""
            heroCTA = "Let’s build something,"
            heroCTALink = "#ServiceWizard"
            ctaLinkText = "Start the Quick Guide!"
            heroImage = ""
            heroImageAlt = "Alternate text for the hero image"
            />
            <section className="w-full mt-[-3.5%] px-2 flex flex-col gap-4">
              <h2 className="text-left md:text-3xl font-bold capitalize tracking-wider text-[var(--brand-color)]">What are sites that adapt?</h2>
              <div className="text-left flex flex-col gap-3">
                <p>Most websites are built to look good and stay the same. They show every visitor the same content, the same layout, and the same path forward — regardless of who they are or why they’re there.</p>
                <p>When I talk about sites that adapt, I mean building systems that respond.</p>
                <p>That can mean adjusting content based on user intent, guiding visitors differently depending on their goals, or shaping workflows around how your business actually operates — not forcing everything into a rigid template.</p>
                <p>An adaptive site doesn’t just exist online. <br /> It works <span className="italic">with</span> your users.</p>
              </div>
            </section>
            <ServiceWizard answers={wizardAnswers} onAnswer={setAnswer}/>
            <Services />
          </>
          )
        }
        { !siteMode && (
          <>
            <Hero 
            pageTitle = "Sites that adapt to what you need"
            pageSubTitle = "I’m Ashton Montgomery — a frontend-focused software engineer building flexible, data-driven systems for both teams and businesses."
            support = ""
            heroCTA = "Let’s get you where you’re going:"
            heroCTALink = "#siteDirections"
            ctaLinkText = "Get Started!"
            heroImage = ""
            heroImageAlt = "Alternate text for the hero image"
            />
            <section id="siteDirections" className="w-full mx-auto md:mt-[-3.5%] flex flex-col gap-4">
              <h2 className="text-left md:text-3xl font-bold tracking-wider text-[var(--brand-color)]">What brings you here today?</h2>
              <div className="flex my-3 justify-center gap-[15%]">
                <div className="min-h-[10dvh] flex justify-center items-center">
                  <button onClick={() => setSiteMode("Freelance")} className="w-fit rounded-md px-3 py-1 border border-white hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Services & solutions</button>
                </div>
                <div className="min-h-[10dvh] flex justify-center items-center">
                  <button onClick={() => setSiteMode("W2")} className="w-fit rounded-md px-3 py-1 border border-white hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">Portfolio & experience</button>
                </div>
              </div>
            </section>
          </>
          )
        }
        

        {/* Contact Section - will have to change based off site mode too, will need 2 different contact forms */}
        <Footer />
      </main>

    </>
  )
}

export default App
