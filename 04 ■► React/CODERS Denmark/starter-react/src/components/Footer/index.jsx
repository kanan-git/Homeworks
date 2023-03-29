// FOOTER COMPONENT

import React from "react"
import sFooter from "./style.module.css"

function Footer() {
    return (
        <header id={sFooter.footer}>
            <div>
                Copyright © 2021 All rights reserved.
            </div>
            <div>
                <img src="/04 ■► React/CODERS Denmark/starter-react/src/components/ASSETS/ICONS/iconfinder_github-social-media_765246 1.png" 
                alt="ico-github" />
                <img src="/04 ■► React/CODERS Denmark/starter-react/src/components/ASSETS/ICONS/iconfinder_twitter_317720 1.png" 
                alt="ico-twitter" />
                <img src="/04 ■► React/CODERS Denmark/starter-react/src/components/ASSETS/ICONS/iconfinder_dribble_2916232 1.png" 
                alt="ico-dribble" />
            </div>
            <div>
                Source code available
            </div>
        </header>
    )
}

export default Footer