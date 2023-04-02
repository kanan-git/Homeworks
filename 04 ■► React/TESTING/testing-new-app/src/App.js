import React, { useState } from "react"
import styles from "./global.css"
import MenuList from "./components/MenuList"
import DisplayBox from "./components/DisplayBox"

export default function App() {
    const [currentDiff, setCurrentDiff] = useState('Medium')

    function handleChangeLevel(level) {
        setCurrentDiff(level)
    }

    return (
        <div className="container">
            <MenuList diffLevel={currentDiff} handleChange={handleChangeLevel} />
            <DisplayBox diff={currentDiff} />
        </div>
    )
}