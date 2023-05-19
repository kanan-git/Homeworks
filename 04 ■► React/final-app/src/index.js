import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        {/* <Routes> */}
        {/* <Router> */}
          {/* <Route path="/" element={<App />}> */}
            {/* <Route path="/" element={<Homepage />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/products/view" element={<ItemView />} /> */}
            <App />

            {/* <Router>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router> */}

          {/* </Route> */}
        {/* </Router> */}
        {/* </Routes> */}
      </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>
);

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// cd 04\ ■►\ React/final-app (for changing folder path for git bash command panel)
// cd .. (back to previous folder if direct wrong path)
// npx create-react-app name-here --template redux
// npm install axios (install axios library) && import axios from 'axios'
// npm start (for starting react live server on port 3000)
// update github: 1) git add .; 2) git commit -m "comment here"; 3) git push origin master
// npm install react-router-dom
// cd 04\ ■►\ React/final-app
// npm start
// *** watch sass *** //
// git add .
// git commit -m "."
// git push origin master
// git status
// clear
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬