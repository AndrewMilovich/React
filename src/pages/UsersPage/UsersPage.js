import React, {useEffect, useState} from 'react';
import {userService} from "../../service/user.service";
import User from "../../components/User/User";


const UsersPage = () => {
    let [users,setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => setUsers([...value]))
    },[])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}  />)}

        </div>
    );
};

export default UsersPage;