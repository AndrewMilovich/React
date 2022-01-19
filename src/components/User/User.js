import React, {useState} from 'react';
import {Link} from "react-router-dom";



const User = ({user}) => {
    const {id, name} = user

    return (
        <div>
            <div>
                <div>Id:{id}</div>
                <Link to={id.toString()} state={user}>{name}</Link>
            </div>

        </div>
    );
};

export default User;