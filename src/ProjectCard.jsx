import React from "react";


function ProjectCard(props) {

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;       
        const pct = (x / rect.width) * 100;             
        document.documentElement.style.setProperty("--cursor-position", `${pct}%`);
    };

    return (
        <div className="project group glassCard w-1/4 max-w-3xs flex flex-col items-center p-3 bg-[var(--surface-color)] rounded-lg border-[var(--border-color)] shadow-md shadow-[var(--surface-shadow-color)] hover:shadow-lg hover:shadow-[var(--surface-shadow-hovered-color)]">
            <h3 className="text-lg font-bold" >{props.projectName}</h3>
            <p class="projectDescription" className="w-9/10">{props.description}</p>
            <div className="projectLinks w-fit flex flex-col justify-center items-center my-1 gap-1 mt-2">
                <a href={props.projectLink} className="bg-[var(--surface-color)]  w-full px-2 py-1 rounded-lg border border-white/25 focus:outline-none focus:ring-1 focus:ring-[var(--focus-ring)] focus:ring-offset-2 focus:ring-offset-[var(--ring-offset-color)]" onMouseMove={handleMouseMove}>Go to the Project</a>
                <a href={props.githubLink} className="bg-[var(--surface-color)]  w-full px-2 py-1 rounded-lg border border-white/25 focus:outline-none focus:ring-1 focus:ring-[var(--focus-ring)] focus:ring-offset-2 focus:ring-offset-[var(--ring-offset-color)]" onMouseMove={handleMouseMove}>Go to the Project Github</a>
            </div>
            <div className="clickable"></div>
        </div>
    )
}

export default ProjectCard;