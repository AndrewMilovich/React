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
            <form action="">
                Name:<input  type="text"  placeholder={'NAme'}/>
                UserName: <input type="text"placeholder={'UserName'}/>
                Email:  <input type="text"placeholder={'Email'}/>
                <button onClick={event => {event.preventDefault() ;a()  }}>Find</button>
               <div className={'Users'}> {users.map(value => <User key={value.id} user={value}/>)}</div>

            </form>
        </div>
    );
};

export default Users;