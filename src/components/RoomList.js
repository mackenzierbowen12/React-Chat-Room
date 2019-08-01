import React, {Component} from 'react';

class RoomList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: []
        };

        this.roomsRef = this.props.firebase.database().ref('rooms');
    }
}

export default RoomList;