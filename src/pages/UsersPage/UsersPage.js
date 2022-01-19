import React, {useEffect, useState} from 'react';
import {userService} from "../../service/user.service";
import User from "../../components/User/User";
import UserDetails from "../../components/UserDetails/UserDetails";

const UsersPage = () => {
    let [users, setUsers] = useState([]);

    const [user, setUser] = useState(null)

    const getUser = (user) => {
        setUser(user)

    }

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}

        </div>
    );
};

export default UsersPage;