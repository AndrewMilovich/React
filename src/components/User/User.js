import React, {useState} from 'react';
import {Link} from "react-router-dom";

import UserDetails from "../UserDetails/UserDetails";
const User = ({user, getUser}) => {
    const {id, name} = user

    return (
        <div>
            <div>
                <div>Id:{id}</div>
                <Link to={id.toString()} state={user}>{name}</Link>
            </div>
            <button onClick={() => getUser(user)}>details</button>
            {<UserDetails getUser={getUser} user={user}/>}
        </div>
    );
};

export default User;