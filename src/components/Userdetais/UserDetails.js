import React from 'react';

const UserDetails = ({user}) => {
    const {name,username,email,address:{city,street}}=user
    return (
        <div>

            <h2>{name}</h2>
            <h2>{username}</h2>
            <h2>{email}</h2>
            <h2>{city}</h2>
            <h2>{street}</h2>
        </div>
    );
};

export default UserDetails;