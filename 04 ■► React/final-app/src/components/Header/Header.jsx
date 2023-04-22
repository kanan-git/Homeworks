// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import s from './index.module.css'

export default function Header() {

    // useState for using js function data in xlm
    const [headerList, setHeaderList] = useState([])

    // fetch data
    function testingJsonServer() {
        axios.get('http://localhost:3001/english/')
        .then(response => setHeaderList(response.data.headerListItems))
        // console.log(headerList)
        // fetch('http://localhost:3001/english/')
        // .then(res => res.json())
        // .then(result => setHeaderListItems(result.headerListItems))
    }
    useEffect(testingJsonServer, [])

    // map for gathering all item of array
    const items = headerList.map(
        (menus, index) => 
        <button key={index} className={s.header__menus}>
            {menus}
        </button>
    )

    return (
        <div className={s.header}> {/* edit classnames, adjust to blender reference */}
            {
                items
            }
        </div>
    )
}
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬