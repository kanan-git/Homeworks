import React from "react"
import styles from "./display.css"

export default function Display(props) {
    console.log(props.children)
    return (
        <>
            <button className="test_buttons" onClick={() => {
                console.log("♥")
            }} >­♥</button>
            <button className="test_buttons" onClick={() => {
                console.log("♣")
            }} >♣</button>
            <button className="test_buttons" onClick={() => {
                console.log("♦")
            }} >♦</button>
            <button className="test_buttons" onClick={() => {
                console.log("♠")
            }} >♠</button>
            <div> {props.children} </div>
        </>
    )
}