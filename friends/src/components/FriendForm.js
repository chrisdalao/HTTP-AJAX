import React from 'react';

class FriendForm extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
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
        this.props.addFriend(this.state.friend);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Add A Friend</h1>
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
                    <button className="md-button form-button">Add New Friend</button>
                </form>
            </div>
        )
    }
}

export default FriendForm;
