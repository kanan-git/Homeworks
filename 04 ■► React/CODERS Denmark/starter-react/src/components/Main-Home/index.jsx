// MAIN/HOME COMPONENT

import React from "react"
import sHome from "./style.module.css"

function MainHome() {
    return (
        <header id={sHome.home}>
            <img className={sHome.home__image1} 
            src="/04 ■► React/CODERS Denmark/starter-react/src/components/ASSETS/IMAGES/Saly-13.png" 
            alt="image1" />
            <img className={sHome.home__image2} 
            src="/04 ■► React/CODERS Denmark/starter-react/src/components/ASSETS/IMAGES/Saly-8.png" 
            alt="image2" />
            <div className={sHome.home__container}>
                <h3 className={sHome.home__container_header}>
                    Hey there 👋
                    I am Amirhossein
                </h3>
                <p className={sHome.home__container_paragraph}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className={sHome.home__container_buttons}>
                    <button className={sHome.home__container_buttons__aboutme}>
                        About me
                    </button>
                    <button className={sHome.home__container_buttons__seemore}>
                        😮 Let’s see portfolios
                    </button>
                </div>
            </div>
        </header>
    )
}

export default MainHome