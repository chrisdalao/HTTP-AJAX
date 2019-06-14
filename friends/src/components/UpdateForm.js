import React from 'react';

class FriendForm extends React.Component {
    state = {
        friend: this.props.activeFriend
    }

    changeHandler = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === 'age') {
            value = parseInt(value, 10);
        }
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: value
            }
        }));
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateFriend(this.state.friend);
    }

    render() {
        return (
            <div>
                <h1>Update A Friend</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.changeHandler}
                        value={this.state.friend.name}
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        onChange={this.changeHandler}
                        value={this.state.friend.age}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={this.changeHandler}
                        value={this.state.friend.email}
                    />
                    <button className="md-button form-button">Update Friend</button>
                </form>
            </div>
        )
    }
}

export default FriendForm;
