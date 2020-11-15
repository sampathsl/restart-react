import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <>

        <div className="App">
          <div className="App-header">
            <MyActualHeader/>
            <MyHead/>
          </div>
        </div>

      </>
  );
}

function MyActualHeader() {
  return (
      <>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
      </>
  );
}

function MyHead() {
  return <div id="test"> My Amazing Header {new Date().toLocaleString()} </div>
}

setInterval(function () {
  ReactDOM.render(<MyHead/>, document.getElementById('test'));
}, 1000);

export default App;