import React from 'react'
import {BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Authentication from './pages/Authentication'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={ <Home testing="attention please" /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/authentication" element={ <Authentication /> } />
      </Routes>

      <Footer />
    </>
  )
}

export default App