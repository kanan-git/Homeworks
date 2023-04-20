import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

function App() {

  function testingJsonServer() {
    fetch('https://localhost:3001/headerListItems')
    .then(res => res.json())
    .then(result => console.log(result))
  }
  
  return (
    <div className="App" onClick={testingJsonServer}>
      12345
    </div>
  );
}

export default App;

// cd 04\ ■►\ React/final-app (for changing folder path for git bash command panel)
// cd .. (back to previous folder if direct wrong path)
// npm install json-server (for db.json in root folder)
// npm start (for starting react live server on port 3000)
// npx json-server --watch db.json --port 3001 (for starting json server on port 3001)
// update github: 1) git add .; 2) git commit -m "comment here"; 3) git push origin master