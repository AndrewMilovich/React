import React from 'react';

const User = ({user,getUser}) => {
    const {id,name,username}= user

    return (
        <div>
            <div>{id}={name}={username}</div>
            <button onClick={()=>getUser(user)}>details</button>
        </div>
    );
};

export default User;