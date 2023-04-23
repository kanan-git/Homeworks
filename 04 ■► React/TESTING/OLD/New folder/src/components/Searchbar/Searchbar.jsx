import React from 'react'

export default function Searchbar() {
    return (
        <>
            <form method="get" className="searcbar">
                <label for="search" className="searchbar_label">Search:</label>
                <input type="search" id="search" name="search" className="searchbar_input" />
                <button className="searchbar_magnifier_icon">■</button>
            </form>
        </>
    )
}