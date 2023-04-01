import React from "react"
import styles from "./global.css"

import Header from "./components/Header"
import MainHome from "./components/MainHome"
import MainAbout from "./components/MainAbout"
import Footer from "./components/Footer"

export default function App() {
    return (
        <>
            <Header />
            <MainHome />
            <MainAbout />
            <Footer />
        </>
    )
}