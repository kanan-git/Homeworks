import React, { useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import './global.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'

import Homepage from './pages/Homepage/Homepage'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import ItemView from './pages/ItemView/ItemView'
import MyCart from './pages/MyCart/MyCart'
import MyFav from './pages/MyFav/MyFav'
import Products from './pages/Products/Products'
import Purchase from './pages/Purchase/Purchase'
import Settings from './pages/Settings/Settings'
import SignInOrUp from './pages/SignInOrUp/SignInOrUp'

function App() {

  // <Homepage />   {/* done */}
  // <About />   {/* carousel fix scaling, infinite loop, gallery grid count or space */}
  // <Contact />   {/* add API map */}
  // <Products />   {/* map() api data and produce more product cards, filter show/hide function, dataSource languages feature */}

  return (
    <div className="App">   {/* overall fix width issue, must be seems without scroll */}
      {/* ————— ————— ————— ————— ————— ————— ————— ————— ————— */}
      <Header />   {/* done */}
      <Breadcrumb />   {/* fix language condition,  */}
      {/* ————— ————— ————— ————— ————— ————— ————— ————— ————— */}
      <Homepage />   {/* done */}
      <About />   {/* carousel fix scaling, infinite loop, gallery grid count or space */}
      <Contact />   {/* add API map */}
      <Products />   {/* map() api data and produce more product cards, filter show/hide function, dataSource languages feature */}
      <ItemView />   {/* . */}
      <MyCart />   {/* . */}
      <MyFav />   {/* . */}
      <Purchase />   {/* . */}
      <Settings />   {/* . */}
      <SignInOrUp />   {/* . */}

      {/* add popup components to complete them too */}

      {/* ————— ————— ————— ————— ————— ————— ————— ————— ————— */}
      <Footer />   {/* done */}
      {/* ————— ————— ————— ————— ————— ————— ————— ————— ————— */}
    </div>
  );
}

export default App;
