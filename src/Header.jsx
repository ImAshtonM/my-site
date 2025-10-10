import React from "react"

function Header() {
return (
    <header className="flex w-full mb-2 min-w-full  justify-center gap-6 ">
        <img src="" alt="" className="basis-1/6 min-w-3xs" />
        <div className="basis-2/3">
            <p class="font-semibold leading-tight truncate">Ashton Montgomery</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 truncate">Front-End Developer</p>
        </div>
        <nav class="basis-1/2 ml-auto" aria-label="Primary">
        <ul class="flex justify-end items-center gap-6">
            <li><a class="rounded-md px-3 py-1 border hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2" href="#projects">Projects</a></li>
            <li><a class="rounded-md px-3 py-1 border hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2" href="#services">Services</a></li>
            <li><a class="rounded-md px-3 py-1 border hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2" href="#about">About</a></li>
            <li><a class="rounded-md px-3 py-1 border hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2" href="#contact">Contact</a></li>
        </ul>
        </nav>
    </header>
)};

export default Header;