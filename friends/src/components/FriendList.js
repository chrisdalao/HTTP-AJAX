import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend';
import FriendForm from './FriendForm';
import UpdateForm from './UpdateForm';
import { Route, NavLink } from 'react-router-dom';


export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            activeFriend: null
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

    addFriend = friend => {
        axios
            .post('http://localhost:5000/friends', friend)
            .then(res => {
                this.setState({ friends: res.data })
                this.props.history.push('/');
            })
            .catch(err => { console.log(err) })
    }

    updateFriend = friend => {
        axios
            .put(`http://localhost:5000/friends/${friend.id}`, friend)
            .then(res => {
                this.setState({ friends: res.data })
                this.props.history.push('/');
            })
            .catch(err => { console.log(err) })
    }

    setUpdateForm = (e, friend) => {
        e.preventDefault();
        this.setState({ activeFriend: friend }, () => {
            this.props.history.push('/update-form');
        });
    };

    deleteFriend = (e, friend) => {
        e.preventDefault();
        axios
            .delete(`http://localhost:5000/friends/${friend.id}`)
            .then(res => {
                this.setState({ friends: res.data })
                this.props.history.push('/');
            })
            .catch(err => { console.log(err) })
    }


    render() {
        return (
            <div className="App">
                <nav>
                    <h1>Friends React</h1>
                    <div className="nav-links">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/friend-form">Add Friend</NavLink>
                    </div>
                </nav>
                <Route
                    exact
                    path="/"
                    render={props => (
                        <Friend
                            {...props}
                            friends={this.state.friends}
                            setUpdateForm={this.setUpdateForm}
                            deleteFriend={this.deleteFriend}
                        />
                    )}
                />
                <Route
                    path="/friend-form"
                    render={(props) => <FriendForm {...props} addFriend={this.addFriend} />}
                />
                <Route
                    path="/update-form"
                    render={(props) => (
                        <UpdateForm
                            {...props}
                            updateFriend={this.updateFriend}
                            activeFriend={this.state.activeFriend}
                        />
                    )}
                />
            </div>
        );
    }
}
