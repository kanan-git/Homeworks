import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect, useRef} from 'react'

function Loading() {
    return (
        <>
            <div className={s.loading__overlay}></div>
            <div className={s.loading}>
                <div className={s.loading__animation}>
                    <div className={s.loading__animation_blocks}></div>
                    <div className={s.loading__animation_blocks}></div>
                    <div className={s.loading__animation_blocks}></div>
                    <div className={s.loading__animation_blocks}></div>
                    <div className={s.loading__animation_blocks}></div>
                    <div className={s.loading__animation_blocks}></div>
                    <div className={s.loading__animation_blocks}></div>
                    <div className={s.loading__animation_blocks}></div>
                </div>
            </div>
        </>
    )
}

export default Loading