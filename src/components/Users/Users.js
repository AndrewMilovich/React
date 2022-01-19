import React, {useEffect, useState} from 'react';
import {userService} from "../../service/user.service";
import User from "../User/User";
import UserDetails from "../Userdetais/UserDetails";

const Users = () => {

    const [users, setUsers] = useState([])

    const [user, setUser] = useState(null)

    const getUser = (user) => {
        setUser(user)
    }

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))

    }, [])


    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
            {  user  &&< UserDetails user={user}/>}
        </div>
    );
};

export default Users;