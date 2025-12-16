export default function Hero(props) {
    return (
        <div id="hero" className="w-full my-2 min-h-[25dvh] flex justify-center items-center">
            <div className="container w-[80%] h-full flex justify-center items-center gap-2">
                <div className="basis-1/2 justify-items-start">
                    <h1 className="text-2xl">{props.pageTitle}</h1>
                    <h2 className="text-xl">{props.pageSubTitle}</h2>
                    <div className="cta">
                        <p>{props.heroCTA}</p>
                        <button><a href={props.heroCTALink}>Link to form</a></button>
                    </div>
                </div>
                <div className="basis-1/2">
                    <img src={props.heroImage} alt={props.heroImageAlt} srcset=""  className=""/>
                </div>
            </div>
        </div>
    )
};