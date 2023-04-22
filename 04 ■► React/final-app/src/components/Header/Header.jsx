// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ==============>> imports of React functions
import React, { useState, useEffect } from 'react';
import axios from 'axios'
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ==============>> import design sheet
import s from './index.module.css'
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
function Header() {

    // ==============>> useState for using js function data in xlm
    const [headerList, setHeaderList] = useState([])

    // ==============>> temporary condition for testing is working
    var a = 3

    // ==============>> useState & useEffect for fetch once, also changing language with condition
    const [changeUrl, setChangeUrl] = useState([])
    useEffect(
        () => {
            if (a > 2) {
                var fetchLink = "http://localhost:3001/english"
                setChangeUrl(fetchLink)
                testingJsonServer()
                console.log(changeUrl)
            } else {
                var fetchLink = "http://localhost:3001/azerbaijani"
                setChangeUrl(fetchLink)
                testingJsonServer()
                console.log(changeUrl)
            }
        }, []
    )

    // ==============>> fetch data function
    function testingJsonServer() {
        axios.get(`${changeUrl}`)
        .then(response => setHeaderList(response.data.headerListItems))
        // fetch('http://localhost:3001/english/')
        // .then(res => res.json())
        // .then(result => setHeaderListItems(result.headerListItems))
        console.log(headerList, changeUrl)
    }

    // ==============>> map for gathering all item of array
    const items = headerList.map(
        (menus, index) => 
        <button key={index} className={s.header__menus}>
            {menus}
        </button>
    )

    // ==============>> return of function Header
    return (
        <div className={s.header}> {/* edit classnames, adjust to blender reference */}
            {
                items
            }
        </div>
    )
}

// ==============>> exporting component function Header
export default Header;
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬