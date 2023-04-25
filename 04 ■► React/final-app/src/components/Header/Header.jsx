import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../dataSource/data-source'
import {useState, useEffect} from 'react'

function Header() {
    const [menuElements, setMenuElements] = useState([])
    useEffect(
        () => {
            setMenuElements(dataSource.english.header)
        }, []
    )
    console.log(menuElements)
    return (
        <header className={s.header}>
            {/* top side of the header as navbar */}
            <nav className={s.header__list}>
                {
                    menuElements.map(
                        ((element, index) => <button key={index} className={s.header__list_buttons}> {element} </button>)
                    )
                }
            </nav>
            {/* bottom main side of the header contains logo, searchbar, language bar, userpanel */}
            {/* userpanel in dropdown: switch light/dark, if quest - sign in & register, if signed in - favorites, cart, log out */}
            <div className={s.header__main}>
                <img src="#" alt="." className={s.header__main_logo} /> {/* temporary static elements for reference */}
                <span className={s.header__main_}></span> {/* temporary static elements for reference */}
                <span className={s.header__main_}></span> {/* temporary static elements for reference */}
                <span className={s.header__main_}></span> {/* temporary static elements for reference */}
                <span className={s.header__main_}></span> {/* temporary static elements for reference */}
                <span className={s.header__main_}></span> {/* temporary static elements for reference */}
            </div>
        </header>
    )
}

export default Header