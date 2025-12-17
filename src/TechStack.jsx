export default function TechStack() {
    return (
        <section id="techStack" className="w-full p-4 flex flex-col gap-4 justify-center items-center">
                <h3 className="w-full text-left text-xl font-bold text-[var(--brand-color)]">Were You Asking About My Current Tech Stack?</h3>
                <div className="flex items-align justify-center gap-10">
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
                        <div id="techStackIcons" className="relative transform-3d lg:translate-y-[100%] lg:translate-x-[50%]">
                            <img src="src\assets\techStack\html-5.182x256.png" alt="HTML icon" className="absolute w-[50px] translate-y-[75%]"/>
                            <img src="src\assets\techStack\css-3.182x256.png" alt="CSS icon" className="absolute w-[50px] translate-y-[75%]"/>
                            <img src="src\assets\techStack\javascript.256x256.png" alt="JavaScript icon" className="absolute w-[50px] translate-y-[100%]"/>
                            <img src="src\assets\techStack\nodejs.256x157.png" alt="NodeJS icon" className="absolute w-[50px] translate-y-[100%]"/>
                            <img src="src\assets\techStack\postgresql-plain-wordmark.256x254.png" alt="PostgresSQL icon" className="absolute w-[50px] translate-y-[100%]"/>
                            <img src="" alt="React icon" /* className="absolute w-[50px]" *//>
                        </div>
                    </div>
                </div>
        </section>
    )
};
