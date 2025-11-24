import React from "react"

function Hero() {
    return (
        <div id="hero" className="w-full">
            <div className="container flex gap-2 justify-center items-center">
                <div className="basis-1/2">
                    <h1>Web Developer</h1>
                    <h2>Solving real world problems through software</h2>
                    <div className="cta">
                        <p>Come up with a good CTA</p>
                        <button><a href="">Link to form</a></button>
                    </div>
                </div>
                <div className="basis-1/2">
                    <img src="" alt="Hero Image" srcset=""  className=""/>
                </div>
            </div>
        </div>
    )
}

export default Hero 