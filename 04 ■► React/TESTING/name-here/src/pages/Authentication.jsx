import { React, ReactDOM, useEffect, useState, useRef } from "react"
import { useSelector } from 'react-redux'

function Authentication() {
    const signin = useRef()
    const signup = useRef()

    const fakeConditionX = useSelector((state) => state.auth.fakeConditionX)
    console.log(fakeConditionX)

    function switchingStatus() {
        if(fakeConditionX === "login") {
            signin.current.style.backgroundColor = `blue`
            signin.current.style.color = `white`
            signup.current.style.backgroundColor = `transparent`
            signup.current.style.color = `black`
            console.log("current status: ", fakeConditionX)
        } else if(fakeConditionX === "register") {
            signup.current.style.backgroundColor = `blue`
            signup.current.style.color = `white`
            signin.current.style.backgroundColor = `transparent`
            signin.current.style.color = `black`
            console.log("current status: ", fakeConditionX)
        }
    }

    useEffect(
        () => {
            // var fakeConditionX = "login" // login register

            // if(fakeConditionX === "login") {
            //     signin.current.style.backgroundColor = `blue`
            //     signin.current.style.color = `white`
            //     signup.current.style.backgroundColor = `transparent`
            //     signup.current.style.color = `black`
            //     console.log("current status: ", fakeConditionX)
            // } else if(fakeConditionX === "register") {
            //     signup.current.style.backgroundColor = `blue`
            //     signup.current.style.color = `white`
            //     signin.current.style.backgroundColor = `transparent`
            //     signin.current.style.color = `black`
            //     console.log("current status: ", fakeConditionX)
            // }

            // switchingStatus()
            
            document.addEventListener("timeupdate", switchingStatus)
        }, []
    )

    return (
        <ul onMouseEnter={switchingStatus}>
            <li ref={signin}> Sign in </li>
            <li ref={signup}> Sign up </li>
            <br /> <br />
            current status: {fakeConditionX}
        </ul>
    )
}

export default Authentication