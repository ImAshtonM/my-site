export default function Footer() {
    const date = new Date
    const year = date.getFullYear()
    return (
        <footer id="footer" className="w-full flex flex-col justify-evenly items-center py-2">
            <p>© {year} Ashton Montgomery · Independent Web Developer</p>
            <div className="flex justify-center gap-4 hover:(--hover-color)">
                <a href="">Privacy Policy</a>
                <a href="">Terms & Conditions</a>
            </div>
            <ul className="list-none text-xs">Icons provided by Freepik - Flaticon.com 
                <li><a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a></li>
                <li><a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Freepik - Flaticon</a></li>
            </ul>
        </footer>
    )
};