import React from 'react'

const Friend = props => {
    return (
        <div>
            {props.friends.map(friend => (
                <div key={friend.id}>
                    <div>{friend.name}</div>
                    <div>{friend.age}</div>
                    <div>{friend.email}</div>
                </div>
            ))}
        </div>
    )
}

export default Friend;
