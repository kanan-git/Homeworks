import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import App from './App';
// import { BrowserRouter, Route, Routes } from "react-router-dom"

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    {/* <Provider store={store}> */}
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path="/" element={<App />}> */}
            {/* <Route path="/" element={<Homepage />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/products/view" element={<ItemView />} /> */}
            <App />
          {/* </Route> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
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
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬