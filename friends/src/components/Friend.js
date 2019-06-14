import React from 'react'

const Friend = props => {
    return (
        <div className="friends-list-wrapper">
            {props.friends.map(friend => (
                <div className="friend-card" key={friend.id}>
                    <div>Name: {friend.name}</div>
                    <div>Age: {friend.age}</div>
                    <div>Email: {friend.email}</div>
                    <button className="md-button" onClick={e => props.setUpdateForm(e, friend)}>Update</button>
                    <button className="md-button-danger" onClick={e => props.deleteFriend(e, friend)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Friend;
