import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';


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


class App extends Component {
  render() {
    return (
      <div>
      <RoomList 
        firebase={firebase}
      />
      </div>
    );
  }  
}

export default App;
