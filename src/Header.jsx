import { useState } from "react";
import PortfolioModeNav from "./PortfolioModeNav";
import FreelanceModeNav from "./FreelanceModeNav";

export default function Header({onResetSiteMode, currentSiteMode}) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
    <header className="w-full mb-2 min-w-full flex flex-col md:flex-row justify-center items-center gap-6 relative">
        <img onClick={onResetSiteMode} src="src\assets\siteLogoBlue.png" alt="" className="w-[100px] logo cursor-pointer" />
        <div className="basis-2/3">
            <p className="font-semibold leading-tight truncate">Ashton Montgomery</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Front-End Developer</p>
        </div>
        <button id="menu-btn" className="md:hidden focus:outline-none absolute top-[10%] right-[5%]" aria-label="Toggle Menu" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        {currentSiteMode === "W2" && (<PortfolioModeNav />)}
        {currentSiteMode === "Freelance" && (<FreelanceModeNav />)}
        {showMobileMenu && (
            <>
                <nav id="mobile-menu" className="bg-slate-800 px-4 pb-4 space-y-2 rounded-md absolute top-[25%] right-[7.5%]">
                    <a href="#home" className="block py-2 hover:text-[var(--hover-color)]" onClick={() => setShowMobileMenu(false)}>Home</a>
                    <a href="#projects" className="block py-2 hover:text-[var(--hover-color)]" onClick={() => setShowMobileMenu(false)}>Projects</a>
                    <a href="#services" className="block py-2 hover:text-[var(--hover-color)]" onClick={() => setShowMobileMenu(false)}>Services</a>
                    <a href="#about" className="block py-2 hover:text-[var(--hover-color)]" onClick={() => setShowMobileMenu(false)}>About</a>
                    <a href="#contact" className="block py-2 hover:text-[var(--hover-color)]" onClick={() => setShowMobileMenu(false)}>Contact</a>
                </nav>
            </>
        )}
    </header>
)};

