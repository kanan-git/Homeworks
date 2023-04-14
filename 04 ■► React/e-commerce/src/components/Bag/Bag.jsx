import React from 'react'

export default function Bag() {
    return (
        <>
            <aside className="bag">  {/* bag side */}
                <h3 className="bag_header"> {/* header block of bag side */}
                Bag
                </h3>
                <span className="bag_icons_container"> {/* small view grids block of bag side */}
                <div className="bag_small_icons"> {/* small image */}
                    <img src="#" alt="bag-item-001" className="icon_contents" />
                </div>
                <div className="bag_small_icons"> {/* small image */}
                    <img src="#" alt="bag-item-002" className="icon_contents" />
                </div>
                <div className="bag_small_icons"> {/* small image */}
                    <img src="#" alt="bag-item-003" className="icon_contents" />
                </div>
                <div className="bag_small_icons"> {/* small image */}
                    <img src="#" alt="bag-item-004" className="icon_contents" />
                </div>
                </span>
                <button className="bag_button"> {/* button block of bag side */}
                ■ View Bag
                </button>
            </aside>
        </>
    )
}