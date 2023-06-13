import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'

function Overlay() {
    return (
        <div className={s.overlay}></div>
    )
}

export default Overlay