import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './global.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
  const productInfo = useSelector((state) => state.selectedProduct.productData)

  var authDataFromLocalStorage = JSON.parse(localStorage.getItem('signedUser'))

  if(authDataFromLocalStorage == null) {
    var authDataFromLocalStorage = localStorage.setItem('signedUser', JSON.stringify('guest'))
  } else {
    // do nothing
  }

  if(authDataFromLocalStorage == 'guest') {
    var dynamicElement = <SignInOrUp />
  } else {
    var dynamicElement = null
  }
  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Breadcrumb currentPath="/" />
              <Homepage />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <Breadcrumb currentPath="/about" />
              <About />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <Breadcrumb currentPath="/contact" />
              <Contact />
              <Footer />
            </>
          } />
          <Route path={"/products/item_view_id=" + productInfo.id} element={
            <>
              <Header />
              <Breadcrumb currentPath="/products/item_view" />
              <ItemView />
              <Footer />
            </>
          } />
          <Route path="/my_cart" element={
            <>
              <Header />
              <Breadcrumb currentPath="/my_cart" />
              <MyCart />
              <Footer />
            </>
          } />
          <Route path="/my_favorites" element={
            <>
              <Header />
              <Breadcrumb currentPath="/my_cart" />
              <MyFav />
              <Footer />
            </>
          } />
          <Route path="/products/item_view/purchase_completed" element={
            <>
              <Purchase />
            </>
          } />
          <Route path="/user_settings" element={
            <>
              <Header />
              <Breadcrumb currentPath="/user_settings" />
              <Settings />
              <Footer />
            </>
          } />
          <Route path="/products" element={
            <>
              <Header />
              <Breadcrumb currentPath="/products" />
              <Products />
              <Footer />
            </>
          } />
          <Route path="/authentication_shopnet" element={dynamicElement} />
        </Routes>
    </div>
  );
}

export default App;