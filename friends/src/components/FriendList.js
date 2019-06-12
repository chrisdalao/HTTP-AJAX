import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend';


export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    render() {
        return (
            <div className="friend-list">
                <Friend friends={this.state.friends} />
                <form action="">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Age" />
                    <input type="text" placeholder="Email" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
