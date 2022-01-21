import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../service/user.service";
import User from "../../components/User/User";
import './UserPage.css'

const UsersPage = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])

    return (
        <div>
            <div className={'userDetails'}>
                <div className={'users'}>{
                    users.map(user => <User key={user.id} user={user}/>)}
                </div>
                <div className={'outlet'}><Outlet/></div>
            </div>
        </div>
    );
};

export default UsersPage;