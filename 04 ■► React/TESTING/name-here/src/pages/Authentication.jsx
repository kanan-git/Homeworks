import { React, ReactDOM, useEffect, useState, useRef } from "react"
import { useSelector } from 'react-redux'

function Authentication() {
    const signin = useRef()
    const signup = useRef()

    const authValue = useSelector((state) => state.auth)
    console.log(authValue)

    useEffect(
        () => {
            var fakeConditionX = "login" // login register

            if(fakeConditionX == "login") {
                signin.current.style.backgroundColor = `blue`
                signin.current.style.color = `white`
                signup.current.style.backgroundColor = `transparent`
                signup.current.style.color = `black`
            } else {
                signup.current.style.backgroundColor = `blue`
                signup.current.style.color = `white`
                signin.current.style.backgroundColor = `transparent`
                signin.current.style.color = `black`
            }
        }, []
    )

    return (
        <ul>
            <li ref={signin}> Sign in </li>
            <li ref={signup}> Sign up </li> {authValue}
        </ul>
    )
}

export default Authentication