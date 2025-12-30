export default function FreelanceModeNav() {
    return (
        <nav className="basis-1/2 ml-auto" aria-label="Primary">
            <ul className="flex justify-end items-center invisbile md:visible md:gap-6">
                
                <li><a className="rounded-md px-3 py-1 border hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2" href="#services">Services</a></li>
                <li><a className="rounded-md px-3 py-1 border hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2" href="#about">About</a></li>
                <li><a className="rounded-md px-3 py-1 border hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2" href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}