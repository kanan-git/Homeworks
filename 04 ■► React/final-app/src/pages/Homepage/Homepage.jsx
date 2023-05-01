import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect} from 'react'

function Homepage() {
    return (
        <main className={s.homepage}>
            this is the homepage of the ShopNet

            <section className={s.homepage__categories}>
                categories
                <div className={s.qwertyuiop123456789}>
                    123
                </div>
            </section>

            <section className={s.homepage__brands}>
                brands
                <div className={s.qwertyuiop123456789}>
                    123
                </div>
            </section>

            <section className={s.homepage__discount}>
                discount
                <div className={s.qwertyuiop123456789}>
                    123
                </div>
            </section>
        </main>
    )
}

export default Homepage