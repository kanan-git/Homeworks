import React from "react"

export function App() {

    const headerMenus = ["Home", "Products", "Career", "About Us", "Contact", "FAQ"]

    return (
        <fragment key={1}>

            {/* <div>Test123</div> */}

            <>

                <header head={headerMenus}></header>
                <main></main>
                <footer></footer>

            </>

        </fragment>)
}