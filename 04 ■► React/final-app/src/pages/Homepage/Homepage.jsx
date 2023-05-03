import React from 'react'
import s from './index.module.css'
import {dataSource} from '../../data/data-source'
import {useState, useEffect} from 'react'

import categ_001 from './homepage assets/categories/1.png'
import categ_002 from './homepage assets/categories/2.png'
import categ_003 from './homepage assets/categories/3.png'
import categ_004 from './homepage assets/categories/4.png'
import categ_005 from './homepage assets/categories/5.png'
import categ_006 from './homepage assets/categories/6.png'
import categ_007 from './homepage assets/categories/7.png'
import categ_008 from './homepage assets/categories/8.png'
import categ_009 from './homepage assets/categories/9.png'
import categ_010 from './homepage assets/categories/10.png'
import categ_011 from './homepage assets/categories/11.png'

import brands_001 from './homepage assets/brands/1.png'
import brands_002 from './homepage assets/brands/2.png'
import brands_003 from './homepage assets/brands/3.png'
import brands_004 from './homepage assets/brands/4.png'
import brands_005 from './homepage assets/brands/5.png'
import brands_006 from './homepage assets/brands/6.png'
import brands_007 from './homepage assets/brands/7.png'
import brands_008 from './homepage assets/brands/8.png'
import brands_009 from './homepage assets/brands/9.png'
import brands_010 from './homepage assets/brands/10.png'
import brands_011 from './homepage assets/brands/11.png'

function Homepage() {



    // used ChatGPT -------------------------------------------------------------------------------> START ■
    // const [categoryLinksArraySTATE, setCategoryLinksArraySTATE] = useState([])
    // function generateCategories() {
    //     const categoryLinksArray = []
    //     // var myObject = {}
    //     // const cardsArray = []
    //     for(var i=1; i<=11; i++) {
    //         var nameCategory = "category_" + (("00" + i).slice(-3)) // pad the index with leading zeros
    //         var linkCategory = "./homepage assets/categories/" + i + ".png"
    //         // console.log(nameCategory, "—", linkCategory)
    //         // myObject[nameCategory] = linkCategory
    //         categoryLinksArray.push(linkCategory)
    //     }
    //     // console.log(myObject.category_001)
    //     // for (const names in myObject) {
    //     //     // console.log(names, myObject[names])
    //     //     cardsArray.push(
    //     //         <div className={s.homepage__categories_container__cards} key={i}>
    //     //             <img src={myObject[names]} alt={names} className={s.homepage__categories_container__cards_image} />
    //     //             <p className={s.homepage__categories_container__cards_title}> Groceries {console.log(i)} </p>
    //     //         </div>
    //     //     )
    //     // }
    //     setCategoryLinksArraySTATE(categoryLinksArray)
    // }
    // useEffect(
    //     () => {
    //         generateCategories()
    //     }, []
    // )
    // -------------------------------------------------------------------------------------------------
    // const images = {};
    // function importAll(r) {
    //     r.keys().forEach((key) => (images[key] = r(key)));
    // }
    // importAll(require.context("./path/to/images/directory", false, /\.png$/));
    // importAll(require.context("./hompage assets/categories", false, /\.png$/));
    // Now you can use images like this:
    // <img src={images["./image-01.png"]} alt="Image 01" />
    // used ChatGPT <------------------------------------------------------------------------------- END ■

    return (
        <main className={s.homepage}>
            <section className={s.homepage__categories}>
                {/* container which holds header and buttons */}
                <div className={s.homepage__categories_topside}>
                    <h3 className={s.homepage__categories_topside__header}> Categories </h3>
                    <span className={s.homepage__categories_topside__box}>
                        <button className={s.homepage__categories_topside__box_buttons} id={s.arrow_left}> ◄ </button>
                        <button className={s.homepage__categories_topside__box_buttons} id={s.arrow_right}> ► </button>
                    </span>
                </div>
                {/* container which holds cards */}
                <div className={s.homepage__categories_container}>
                    {/* cards --- card-001 */}
                    <div className={s.homepage__categories_container__cards}>
                        <div className={s.homepage__categories_container__cards_image__content}>
                            <img src={categ_001} alt="categ_001" className={s.homepage__categories_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__categories_container__cards_title}> Groceries </p>
                    </div>
                    {/* cards --- card-002 */}
                    <div className={s.homepage__categories_container__cards}>
                        <div className={s.homepage__categories_container__cards_image__content}>
                            <img src={categ_002} alt="categ_002" className={s.homepage__categories_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__categories_container__cards_title}> Assembly Elements </p>
                    </div>
                    {/* cards --- card-003 */}
                    <div className={s.homepage__categories_container__cards}>
                        <div className={s.homepage__categories_container__cards_image__content}>
                            <img src={categ_003} alt="categ_003" className={s.homepage__categories_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__categories_container__cards_title}> Cutting </p>
                    </div>
                    {/* cards --- card-004 */}
                    <div className={s.homepage__categories_container__cards}>
                        <div className={s.homepage__categories_container__cards_image__content}>
                            <img src={categ_004} alt="categ_004" className={s.homepage__categories_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__categories_container__cards_title}> Chemical Products </p>
                    </div>
                    {/* cards --- card-005 */}
                    <div className={s.homepage__categories_container__cards}>
                        <div className={s.homepage__categories_container__cards_image__content}>
                            <img src={categ_005} alt="categ_005" className={s.homepage__categories_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__categories_container__cards_title}> Job Protection </p>
                    </div>
                    {/* cards --- card-006 */}
                    <div className={s.homepage__categories_container__cards}>
                        <div className={s.homepage__categories_container__cards_image__content}>
                            <img src={categ_006} alt="categ_006" className={s.homepage__categories_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__categories_container__cards_title}> Tools </p>
                    </div>
                    {/* cards --- card-007 */}
                    <div className={s.homepage__categories_container__cards}>
                        <div className={s.homepage__categories_container__cards_image__content}>
                            <img src={categ_007} alt="categ_007" className={s.homepage__categories_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__categories_container__cards_title}> Oils Other </p>
                    </div>
                    {/* cards --- card-008 */}
                    <div className={s.homepage__categories_container__cards}>
                        <div className={s.homepage__categories_container__cards_image__content}>
                            <img src={categ_008} alt="categ_008" className={s.homepage__categories_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__categories_container__cards_title}> Conveyor System </p>
                    </div>
                    {/* cards --- card-009 */}
                    <div className={s.homepage__categories_container__cards}>
                        <div className={s.homepage__categories_container__cards_image__content}>
                            <img src={categ_009} alt="categ_009" className={s.homepage__categories_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__categories_container__cards_title}> FMCG Products </p>
                    </div>
                    {/* cards --- card-010 */}
                    <div className={s.homepage__categories_container__cards}>
                        <div className={s.homepage__categories_container__cards_image__content}>
                            <img src={categ_010} alt="categ_010" className={s.homepage__categories_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__categories_container__cards_title}> Auto Care Tools </p>
                    </div>
                    {/* cards --- card-011 */}
                    <div className={s.homepage__categories_container__cards}>
                        <div className={s.homepage__categories_container__cards_image__content}>
                            <img src={categ_011} alt="categ_011" className={s.homepage__categories_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__categories_container__cards_title}> Reserve Parts </p>
                    </div>
                </div>
            </section>

            <section className={s.homepage__brands}>
                {/* container which holds header and buttons */}
                <div className={s.homepage__brands_topside}>
                    <h3 className={s.homepage__brands_topside__header}> Brands </h3>
                    <span className={s.homepage__brands_topside__box}>
                        <button className={s.homepage__brands_topside__box_buttons} id={s.arrow_left}> ◄ </button>
                        <button className={s.homepage__brands_topside__box_buttons} id={s.arrow_right}> ► </button>
                    </span>
                </div>
                {/* container which holds cards */}
                <div className={s.homepage__brands_container}>
                    {/* cards --- card-001 */}
                    <div className={s.homepage__brands_container__cards}>
                        <div className={s.homepage__brands_container__cards_image__content}>
                            <img src={brands_001} alt="brands_001" className={s.homepage__brands_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__brands_container__cards_title}> Groceries </p>
                    </div>
                    {/* cards --- card-002 */}
                    <div className={s.homepage__brands_container__cards}>
                        <div className={s.homepage__brands_container__cards_image__content}>
                            <img src={brands_002} alt="brands_002" className={s.homepage__brands_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__brands_container__cards_title}> Assembly Elements </p>
                    </div>
                    {/* cards --- card-003 */}
                    <div className={s.homepage__brands_container__cards}>
                        <div className={s.homepage__brands_container__cards_image__content}>
                            <img src={brands_003} alt="brands_003" className={s.homepage__brands_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__brands_container__cards_title}> Cutting </p>
                    </div>
                    {/* cards --- card-004 */}
                    <div className={s.homepage__brands_container__cards}>
                        <div className={s.homepage__brands_container__cards_image__content}>
                            <img src={brands_004} alt="brands_004" className={s.homepage__brands_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__brands_container__cards_title}> Chemical Products </p>
                    </div>
                    {/* cards --- card-005 */}
                    <div className={s.homepage__brands_container__cards}>
                        <div className={s.homepage__brands_container__cards_image__content}>
                            <img src={brands_005} alt="brands_005" className={s.homepage__brands_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__brands_container__cards_title}> Job Protection </p>
                    </div>
                    {/* cards --- card-006 */}
                    <div className={s.homepage__brands_container__cards}>
                        <div className={s.homepage__brands_container__cards_image__content}>
                            <img src={brands_006} alt="brands_006" className={s.homepage__brands_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__brands_container__cards_title}> Tools </p>
                    </div>
                    {/* cards --- card-007 */}
                    <div className={s.homepage__brands_container__cards}>
                        <div className={s.homepage__brands_container__cards_image__content}>
                            <img src={brands_007} alt="brands_007" className={s.homepage__brands_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__brands_container__cards_title}> Oils Other </p>
                    </div>
                    {/* cards --- card-008 */}
                    <div className={s.homepage__brands_container__cards}>
                        <div className={s.homepage__brands_container__cards_image__content}>
                            <img src={brands_008} alt="brands_008" className={s.homepage__brands_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__brands_container__cards_title}> Conveyor System </p>
                    </div>
                    {/* cards --- card-009 */}
                    <div className={s.homepage__brands_container__cards}>
                        <div className={s.homepage__brands_container__cards_image__content}>
                            <img src={brands_009} alt="brands_009" className={s.homepage__brands_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__brands_container__cards_title}> FMCG Products </p>
                    </div>
                    {/* cards --- card-010 */}
                    <div className={s.homepage__brands_container__cards}>
                        <div className={s.homepage__brands_container__cards_image__content}>
                            <img src={brands_010} alt="brands_010" className={s.homepage__brands_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__brands_container__cards_title}> Auto Care Tools </p>
                    </div>
                    {/* cards --- card-011 */}
                    <div className={s.homepage__brands_container__cards}>
                        <div className={s.homepage__brands_container__cards_image__content}>
                            <img src={brands_011} alt="brands_011" className={s.homepage__brands_container__cards_image__content} />
                        </div>
                        <p className={s.homepage__brands_container__cards_title}> Reserve Parts </p>
                    </div>
                </div>
            </section>

            <section className={s.homepage__discount}>
            </section>
        </main>
    )
}

export default Homepage