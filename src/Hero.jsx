export default function Hero(props) {
    return (
        <div id="hero" className="w-full my-2 py-4 md:min-h-[40dvh] flex justify-center items-center bg-[url(src/assets/hero4.jpg)] bg-[var(--mask-color)] bg-fixed bg-contain bg-bottom bg-blend-multiply">
            <div className="container w-[80%] h-full flex flex-col md:flex-row justify-center items-center gap-4 relative">
                <div className="md:basis-1/2 basis-full flex flex-col justify-items-center md:justify-items-start md:text-left gap-4">
                    <h1 className="text-2xl capitalize">{props.pageTitle}</h1>
                    <h2 className="text-lg">{props.pageSubTitle}</h2>
                    <p className="text-sm">{props.support}</p>
                    <div className="cta flex flex-col gap-2">
                        <p>{props.heroCTA}</p>
                        <a href={props.heroCTALink} className="w-fit rounded-md px-3 py-1 border hover:underline hover:text-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2">{props.ctaLinkText}</a>
                    </div>
                </div>
                <div className="md:basis-1/2 basis-full">
                    <img src={props.heroImage} alt={props.heroImageAlt} srcset=""  className=""/>
                </div>
            </div>
        </div>
    )
};