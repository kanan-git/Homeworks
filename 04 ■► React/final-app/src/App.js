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
  // <FilterAside />   {/* part of products page | canceled */} <---------- build filter inside products page
  return (
    <div className="App">   {/* overall fix width issue, must be seems without scroll */}
      {/* ————— ————— ————— ————— ————— ————— ————— ————— ————— */}
      <Header />   {/* add credit card amount-$ to userpanel under signed nickname, routing, searching, authentication, profiles LorD lang in sessionStorage */}
      <Breadcrumb />   {/* add links from routing with store (redux tlk) */}
      {/* ————— ————— ————— ————— ————— ————— ————— ————— ————— */}
      <Homepage />   {/* done for now */}
      <About />   {/* done for now */}
      <Contact />   {/* add API map with coordinates in frame like iframe */}
      <ItemView />   {/* gather data from clicked productCard with redux toolkit or prop */}
      <MyCart />   {/* with redux tlk get amounts, replace with static references */}
      <MyFav />   {/* with redux tlk get amounts, replace with static references */}
      <Purchase />   {/* gather data from purchased product */}
      <Settings />   {/* done for now */}
      <Products />   {/* request more objects from API (learn how, try), sorting, filtering, routing */}

      <SignInOrUp />
      {/* <Loading /> */}
      {/* <SuccessfullySigned /> */}
      {/* <FailedMessage /> */}
      {/* <PrivacyPolicies /> */}
      {/* <TermsAndConditions /> */}
      {/* ————— ————— ————— ————— ————— ————— ————— ————— ————— */}
      <Footer /> {/* routing */}
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