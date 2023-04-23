import React, { Fragment } from "react"
import styleMenuList from "./styles.module.css"
import MenuListItem from "../MenuListItem"
import levels from "../../utils/constants"

export default function MenuList(props) {
    const { diffLevel, handleChange } = props
    return (
        <div className={styleMenuList.menulist}>
            {
                // levels.map((level, index) => {<MenuListItem diffLevel="Low" />})
                levels.map((level, index) => (
                    <Fragment key={index}>
                        <MenuListItem isSelected={diffLevel === level} handleChange={handleChange} diffLevel={level} />
                    </Fragment>
                ))
            }
        </div>
    )
}