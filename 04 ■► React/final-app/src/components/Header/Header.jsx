import React from 'react'
import s from './index.module.css'

function Header() {
    return (
        <Header className={s.header}>
            <div className={s.header__list}>
                <button className={s.header__list_buttons}> Homepage </button> {/* temporary static buttons for reference */}

                <button className={s.header__list_buttons}> Products </button> {/* temporary static buttons for reference */}
                <button className={s.header__list_buttons}> About us </button> {/* temporary static buttons for reference */}
                <button className={s.header__list_buttons}> Contact </button> {/* temporary static buttons for reference */}
            </div>
        </Header>
    )
}

export default Header