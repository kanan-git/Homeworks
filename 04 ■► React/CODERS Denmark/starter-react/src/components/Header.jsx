import React from "react";

// export function Header() {} ve ya

function Header() {
    return (
        <header id="header">
            <ul className="header">
                {headerMenus.map(
                    (menu, index) => (
                        <li key={index}>
                            {menu}
                        </li>
                    )
                )}
            </ul>
        </header>
    )
}

export {Header};