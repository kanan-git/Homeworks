import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../dataSource/data-source'
import {useState, useEffect} from 'react'

function Homepage() {
    return (
        <main className={s.homepage}>
            this is the homepage of the ShopNet
            <section className={s.homepage__categories}> categories </section>
            <section className={s.homepage__brands}> brands </section>
            <section className={s.homepage__discount}> discount </section>
        </main>
    )
}

export default Homepage