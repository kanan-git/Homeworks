import React from 'react'

export default function Header() {
    return (
        <>
            <header id="header"> {/* static header container for reference*/} {/* static list container for reference */}
                <ul className="list"> {/* list block no 1 */}
                    <li className="list_block_1">
                        <button className="list_items"> <i class="fa-solid fa-shopping-cart fa-shake fa-1x"></i> </button> {/* static items for reference */}
                    </li>
                    <li className="list_block_1">
                        <button className="list_items"> <i class="fa-solid fa-bars fa-spin fa-1x"></i> </button> {/* static items for reference */}
                    </li>
                    <li className="list_block_1">
                        <button className="list_items"> <i class="fa-solid fa-house-chimney fa-beat-fade fa-1x"></i> </button> {/* static items for reference */}
                    </li>
                    <li className="list_block_1">
                        <button className="list_items"> <i class="fa-solid fa-bag-shopping fa-bounce fa-1x"></i> </button> {/* static items for reference */}
                    </li>
                </ul>
                <ul className="list"> {/* list block no 2 */}
                    <li className="list_block_2">
                        <button className="list_items"> <i class="fa-solid fa-arrow-right-from-bracket fa-flip fa-1x"></i> </button> {/* static items for reference */}
                    </li>
                </ul>
            </header>
        </>
    )
}