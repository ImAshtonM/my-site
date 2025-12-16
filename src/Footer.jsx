export default function Footer() {
    return (
        <footer id="footer" className="w-full flex flex-col justify-evenly items-center py-2">
            <p>Copyright © 2025 | A Montgomery Design and Development</p>
            <div className="flex justify-center gap-4 hover:(--hover-color)">
                <a href="">Privacy Policy</a>
                <a href="">Terms & Conditions</a>
            </div>
        </footer>
    )
};