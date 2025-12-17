export default function TechStack() {
    return (
        <section id="techStack" className="w-full py-4 flex flex-col gap-4 justify-center items-center">
                <h3 className="w-full text-left text-xl text-[var(--brand-color)]">Were You Asking About My Current Tech Stack?</h3>
                <div className="flex gap-4">
                    <div className="basis-1/2 text-nowrap">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>NodeJS</li>
                            <li>Postgres SQL</li>
                        </ul>
                    </div>
                    <div className="basis-1/2">
                        <div id="techStackIcons">
                            <img src="src\assets\techStack\html-5.182x256.png" alt="HTML icon" />
                            <img src="src\assets\techStack\css-3.182x256.png" alt="CSS icon" />
                            <img src="src\assets\techStack\javascript.256x256.png" alt="JavaScript icon" />
                            <img src="" alt="React icon" />
                            <img src="src\assets\techStack\nodejs.256x157.png" alt="NodeJS icon" />
                            <img src="src\assets\techStack\postgresql-plain-wordmark.256x254.png" alt="PostgresSQL icon" />
                        </div>
                    </div>
                </div>
        </section>
    )
};
