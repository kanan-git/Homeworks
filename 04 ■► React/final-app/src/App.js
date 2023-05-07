import React from 'react';
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
  return (
    <div className="App">
      <Header />
      <Breadcrumb />

      {/* <Homepage /> */}
      <About />
      <Contact />
      {/* <ItemView /> */}
      <MyCart />
      <MyFav />
      {/* <Products /> */}
      {/* <Purchase /> */}
      {/* <Settings /> */}
      {/* <SignInOrUp /> */}

      <Footer />
    </div>
  );
}

export default App;
