import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

src="https://www.gstatic.com/firebasejs/6.3.3/firebase-app.js"

var firebaseConfig = {
  apiKey: "AIzaSyCEF36bOaDnr701-kbWhCBBfitYbn1r58A",
  authDomain: "bloc-chat-bcc5f.firebaseapp.com",
  databaseURL: "https://bloc-chat-bcc5f.firebaseio.com",
  projectId: "bloc-chat-bcc5f",
  storageBucket: "",
  messagingSenderId: "564882913613",
  appId: "1:564882913613:web:60b1cafdf2171fd4"
};

firebase.initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
