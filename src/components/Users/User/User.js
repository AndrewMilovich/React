import React from 'react';
import './User.css';
const User = (props) => {
    const {id,name,username,email,street,city,suite} = props;
    return (
        <div className={'User'}>
            <h2>id:  {id}</h2>
           <h2>Name:  {name}</h2>
            <h3>UserName:  {username}</h3>
            <h3>email:  {email}</h3>
            <h4>street:  {street}</h4>
            <h4>suite:  {suite}</h4>
            <h4>city:  {city}</h4>
        </div>
    );
};

export default User;