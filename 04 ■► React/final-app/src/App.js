import React, { useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import './global.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import FilterAside from './components/FilterAside/FilterAside'

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

import FailedMessage from './components/Pop-ups/FailedMessage'
import SuccessfullySigned from './components/Pop-ups/SuccessfullySigned'
import TermsAndConditions from './components/Pop-ups/TermsAndConditions'
import PrivacyPolicies from './components/Pop-ups/PrivacyPolicies'
import Loading from './components/Pop-ups/Loading'

function App() {

  // <Homepage />   {/* done */}
  // <About />   {/* carousel fix scaling, infinite loop, gallery grid count or space */}
  // <Contact />   {/* add API map */}
  // <Products />   {/* map() api data and produce more product cards, filter show/hide function, dataSource languages feature */}
  // <ItemView />   {/* done for now, language stuff, not claimed data, only static texts */}
  // <MyCart />   {/* done for now, language stuff */}
  // <MyFav />   {/* done for now, language stuff */}
  // <Purchase />   {/* language stuff, sass style sheets */}
  // <Settings />   {/* language stuff, complete inside of containers, headers, inputs, buttons, sections, sass style sheets */}
  // 

  // <Header />   {/* done | NOTE*: which components gets language data from header, dont use them without header, so make new language input in authentication jsx */}
  // <Breadcrumb />   {/* fix language condition,  */}
  // <Footer />   {/* done */}
  // <FilterAside />   {/* not even started | part of products page*/}

  // <SuccessfullySigned />   {/* language stuff */}
  // <FailedMessage />   {/* language stuff */}
  // <Loading />   {/* done for now */}
  // <TermsAndConditions />   {/* language stuff */}
  // <PrivacyPolicies />   {/* language stuff */}

  return (
    <div className="App">   {/* overall fix width issue, must be seems without scroll */}
      {/* ————— ————— ————— ————— ————— ————— ————— ————— ————— */}
      {/* header's space */}
      {/* breadcrumb's space */}
      {/* ————— ————— ————— ————— ————— ————— ————— ————— ————— */}
      <SignInOrUp />   {/* complete forms styles scss */}
      {/* ————— ————— ————— ————— ————— ————— ————— ————— ————— */}
      {/* footer's space */}
      {/* ————— ————— ————— ————— ————— ————— ————— ————— ————— */}
    </div>
  );
}

export default App;

// cd 04\ ■►\ React/final-app
// npm start
// *** watch sass *** //
// git add .
// git commit -m "."
// git push origin master
// git status
// clear