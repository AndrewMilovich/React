import React, {useEffect, useState} from 'react';

import {userService} from "../../service/user.service";
import User from "../../components/User/User";
import './UserPage.css'
import {Outlet} from "react-router-dom";


const UsersPage = () => {
    let [users, setUsers] = useState([]);


    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])
    return (
        <div className={'userDetails'}>
            <div className={'users'}>{users.map(user => <User key={user.id} user={user} />)}</div>
            <Outlet/>
        </div>
    );
};

export default UsersPage;