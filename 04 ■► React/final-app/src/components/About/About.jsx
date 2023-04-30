import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../dataSource/data-source'
import {useState, useEffect} from 'react'

function About() {
    return (
        <main className={s.about}>
            <div className={s.about__container}>
                this is the about page of the ShopNet
            </div>
        </main>
    )
}

export default About