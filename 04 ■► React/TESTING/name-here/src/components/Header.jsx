import {BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom'

function Header() {
    return (
        <ul>
            <h1> HEADER </h1>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/authentication"> Sign in </Link>
            <Link to="/authentication"> Register </Link>
        </ul>
    )
}

export default Header