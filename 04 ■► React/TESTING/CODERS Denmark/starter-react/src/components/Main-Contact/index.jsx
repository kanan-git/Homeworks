// MAIN/CONTACT COMPONENT

import React from "react"
import sContact from "./style.module.css"

function MainContact() {
    return (
        <header id={sContact.contact}>
            <div className={sContact.contact__image}>
                <img className={sContact.contact__image_content} 
                src="" 
                alt="img-contact" />
            </div>
            <div className={sContact.contact__container}>
                <h3 className={sContact.contact__container_header}>You can reach me any time🙂 </h3>
                <p className={sContact.contact__container_paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                </p>
                <ul className={sContact.contact__container_smedia}>
                    <li  className={sContact.contact__container_smedia__list}>Twitter: amirhwsin</li>
                    <li  className={sContact.contact__container_smedia__list}>Github: amireshoon</li>
                    <li  className={sContact.contact__container_smedia__list}>Dribble: amireshoon</li>
                    <li  className={sContact.contact__container_smedia__list}>Telegram: GeekDreamer</li>
                    <li  className={sContact.contact__container_smedia__list}>Email: amirhwsin@outlook.com</li>
                </ul>
                <div className={sContact.contact__container_buttons}>
                    <button className={sContact.contact__container_buttons__aboutme}>
                        About me
                    </button>
                    <button className={sContact.contact__container_buttons__seemore}>
                        😮 Let’s see portfolios
                    </button>
                </div>
            </div>
        </header>
    )
}

export default MainContact