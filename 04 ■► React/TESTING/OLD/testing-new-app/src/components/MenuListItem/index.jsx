import React, { useState } from "react"
import styleMenuListItem from "./styles.module.css"

export default function MenuListItem(props) {
    const {diffLevel, handleChange, isSelected} = props
    // const {diffLevel} = props
    const [isHovered, setIsHovered] = useState(false)

    // ---------------------------------------------------------------------
    // import React, { useState } from "react" --> hook useState cagirilir
    // const [isHovered, setIsHovered] = useState(false)
    // useState --> hooks | const isHovered = false "baslangic deyer"
    // function setIsHovered(value) {
    //     isHovered = value
    // }
    // ---------------------------------------------------------------------

    function active() {
        setIsHovered(true)
        console.log('active')
    }

    function deactive() {
        setIsHovered(false)
        console.log('deactive')
    }

    function getBGColor() {
        return (
            // isHovered ? 'var(--custom-orange-color)' : 'var(--custom-dark-color)'
            (isHovered || isSelected) ? 'var(--custom-orange-color)' : 'var(--custom-dark-color)'
        )
    }

    return (
            <div 
            onClick={() => {handleChange(diffLevel)}}
            onMouseEnter={() => {active()}}
            onMouseLeave={() => {deactive()}}
            className={styleMenuListItem.menulistitem}
            style={{backgroundColor: getBGColor()}}
            >
                {/* {diffLevel} */}
                {/* {props.diffLevel} */}
                {diffLevel}
            </div>
    )
}