import React, {useEffect, useState} from 'react';

import {userService} from "../service/user.service";
import User from "./User";

function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
const Users = () => {

    const [users,setUsers]=useState([])
    useEffect(()=>{
        userService.getAllUsers()
            .then(value=>setUsers(value))
    },[])
    return (
        <div>
            <form onSubmit={a}>
                Name:<input  type="text" name={'name'} placeholder={'NAme'}/>
                UserName: <input type="text" name={'username'} placeholder={'UserName'}/>
                Email:  <input type="text" name={'email'} placeholder={'Email'}/>
                <button >Find</button>
               <div className={'Users'}> {users.map(value => <User key={value.id} user={value}/>)}</div>

            </form>
        </div>
    );
};
const a = (e) => {
    e.preventDefault()
    console.log(e.target.name.value,e.target.username.value,e.target.email.value)
}
export default Users;