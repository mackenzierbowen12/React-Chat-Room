import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';


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
  constructor(props) {
    super(props);

    this.state = {
      activeRoom: 'No Room Selected'
    };
  }

  setActiveRoom(e) {
    this.setState({ activeRoom: e.target.value })
  }

  render() {
    return (
      
      <div>  
      <RoomList 
        firebase={firebase}
        activeRoom={this.state.activeRoom}
        setActiveRoom={(e) => this.setActiveRoom(e)}
      />
      <h1>Active Room: {this.state.activeRoom} </h1>
      <MessageList
        firebase={firebase}
        activeRoom={this.state.activeRoom}
        
      />
      </div>
    );
  }  
}

export default App;
