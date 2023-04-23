// MAIN/JOURNEY COMPONENT

import React from "react"
import sJourney from "./style.module.css"

function MainJourney() {
    return (
        <header id={sJourney.journey}>
            <div className={sJourney.journey__main}>
                <div className={sJourney.journey__main_top}>
                    <span className={sJourney.journey__main_top__image}>
                        <img className={sJourney.journey__main_top__image_content} src="" alt="image" />
                    </span>
                    <span className={sJourney.journey__main_top__text}>
                        <h3 className={sJourney.journey__main_top__text_header}>
                            The resolution, What am I gonna do?
                        </h3>
                        <p className={sJourney.journey__main_top__text_description}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        </p>
                    </span>
                </div>
                <p className={sJourney.journey__main_bottom}>
                    The standard Lorem Ipsum passage, used since the 1500s
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    1914 translation by H. Rackham
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone 
                </p>
            </div>
            <div className={sJourney.journey__aside}>
                <h4 className={sJourney.journey__aside_head}>Time line</h4>
                <select className={sJourney.journey__aside_years} name="years" id="years">
                    <option className={sJourney.journey__aside_years__options} value="2021">2021</option>
                    <option className={sJourney.journey__aside_years__options} value="2020">2020</option>
                </select>
                <div className={sJourney.journey__aside_comments}>
                    <h6 className={sJourney.journey__aside_comments__header}>2 January 2021</h6>
                    <div className={sJourney.journey__aside_comments__box}>
                        <h5 className={sJourney.journey__aside_comments__box_title}>Lorem ipsum dolor sit ?</h5>
                        <p className={sJourney.journey__aside_comments__box_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className={sJourney.journey__aside_comments}>
                    <h6 className={sJourney.journey__aside_comments__header}>29 January 2021</h6>
                    <div className={sJourney.journey__aside_comments__box}>
                        <h5 className={sJourney.journey__aside_comments__box_title}>Lorem ipsum dolor sit ?</h5>
                        <p className={sJourney.journey__aside_comments__box_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className={sJourney.journey__aside_comments}>
                    <h6 className={sJourney.journey__aside_comments__header}>2 February 2021</h6>
                    <div className={sJourney.journey__aside_comments__box}>
                        <h5 className={sJourney.journey__aside_comments__box_title}>Lorem ipsum dolor sit ?</h5>
                        <p className={sJourney.journey__aside_comments__box_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className={sJourney.journey__aside_comments}>
                    <h6 className={sJourney.journey__aside_comments__header}>1 March 2021</h6>
                    <div className={sJourney.journey__aside_comments__box}>
                        <h5 className={sJourney.journey__aside_comments__box_title}>Lorem ipsum dolor sit ?</h5>
                        <p className={sJourney.journey__aside_comments__box_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainJourney