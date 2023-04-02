import React from "react"
import styleDisplayBox from "./styles.module.css"

export default function DisplayBox(props) {
    return (
        <div className={styleDisplayBox.displaybox}>
            —
            {props.diff}
            —
        </div>
    )
}