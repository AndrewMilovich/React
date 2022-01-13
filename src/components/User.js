import React, {useEffect, useState} from 'react';
import {userService} from "../service/user.service";

const User = ({user:{id,name,email}}) => {
    const[user,setUser]=useState()
    useEffect(()=>{
        userService.getById(id)
            .then(value => setUser(value))
    },[])
    return (
        <div>
            <h2 className={'User'}>{id} --  {name} --  {email}</h2>
        </div>
    );
};

export default User;