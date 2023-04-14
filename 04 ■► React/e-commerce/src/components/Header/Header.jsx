import React from 'react'

export default function Header() {
    return (
        <>
            <header id="header"> {/* static header container for reference*/}
                <ul className="list"> {/* static list container for reference */}
                <span className="list_block_1"> {/* list block no 1 */}
                    <li className="list_items"> ■ 1 </li> {/* static items for reference */}
                    <li className="list_items"> ■ 2 </li> {/* static items for reference */}
                    <li className="list_items"> ■ 3 </li> {/* static items for reference */}
                    <li className="list_items"> ■ 4 </li> {/* static items for reference */}
                </span>
                <span className="list_block_2"> {/* list block no 2 */}
                    <li className="list_items"> ■ 5 </li> {/* static items for reference */}
                </span>
                </ul>
            </header>
        </>
    )
}