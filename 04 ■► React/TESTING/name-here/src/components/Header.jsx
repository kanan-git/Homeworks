import { useEffect, useState } from 'react'
import {BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuthValue } from '../features/counter/authSlice'

function Header() {
    const dispatch = useDispatch()

    const [fakeCstate, setFakeCstate] = useState()

    function handleLogin() {
        var fakeConditionX = "login"
        setFakeCstate(fakeConditionX)
        dispatch(setAuthValue(fakeCstate))
    }
    function handleRegister() {
        var fakeConditionX = "register"
        setFakeCstate(fakeConditionX)
        dispatch(setAuthValue(fakeCstate))
    }

    console.log(fakeCstate)

    return (
        <ul style={
            {backgroundColor: "red"}
        }>
            <h1> HEADER </h1>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/authentication" onClick={handleLogin}> Sign in </Link>
            <Link to="/authentication" onClick={handleRegister}> Register </Link>
        </ul>
    )
}

export default Header