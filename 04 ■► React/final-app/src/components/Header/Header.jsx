// imported elements
import React from 'react'
import s from './index.module.css'
import './index.module.css'
import {dataSource} from '../../dataSource/data-source'
import {useState, useEffect} from 'react'

function Header() {
    // useState components
    const [menuElements, setMenuElements] = useState([])
    // useEffect for call function once
    useEffect(
        () => {
            setMenuElements(dataSource.english.header)
        }, []
    )

    // console log for testing is working or not
    console.log(menuElements)

    // returning result
    return (
        <header className={s.header}>

            {/* top side of the header as navbar */}
            <nav className={s.header__list}>
                {
                    menuElements.map(
                        (element, index) => <button key={index} className={s.header__list_buttons}>
                            {element}
                            {index == 1 ? (<i className='fa-solid fa-caret-right fa-1x fa-rotate-90' id={s.fa_caret}></i>) : ""}
                        </button>
                    )
                }
                
                {/* dropdown menu for userpanel */}
                <div className={s.header__products_dropdown}></div>
            </nav>

            {/* bottom main side of the header contains logo, searchbar, language bar, userpanel */}
            {/* userpanel in dropdown: switch light/dark, if quest - sign in & register, if signed in - favorites, cart, log out */}
            <div className={s.header__main}>
                {/* temporary static elements for reference | LOGO */}
                <img src="#" alt="." className={s.header__main_logo} />

                {/* temporary static elements for reference | SEARCHBAR */}
                <span className={s.header__main_search}>
                    <input type="search" placeholder="Search for any products you want" className={s.header__main_search__input} />
                    <button className={s.header__main_search__button}>
                        <i className='fa-solid fa-magnifying-glass fa-1x fa-bounce'></i>
                    </button>
                </span>
                
                {/* temporary static elements for reference | . */}
                <span className={s.header__main_}>
                    .
                </span>

                {/* temporary static elements for reference | . */}
                <span className={s.header__main_}>
                    .
                </span>

                {/* temporary static elements for reference | . */}
                <span className={s.header__main_}>
                    .
                </span>

                {/* temporary static elements for reference | . */}
                <span className={s.header__main_}>
                    .
                </span>

                {/* dropdown menu for userpanel */}
                <div className={s.header__userpanel_dropdown}></div>
            </div>
        </header>
    )
}

export default Header