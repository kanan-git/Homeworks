import React from 'react';
// import { Counter } from './features/counter/Counter';
import './global.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage'
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <Header />

      <Homepage />
      <About />

      <Footer />
    </div>
  );
}

export default App;
