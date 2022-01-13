import React, {useEffect, useState} from 'react';

import {userService} from "../../service/user.service";
import User from "./User";
import UserDetails from "./Userdetails";
import Post from "../Posts/Post";
const Users = () => {
    const [users,setUsers]=useState([])
    const [user,setUser]=useState(null)
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        userService.getAllUsers()
            .then(value => setUsers(value))
    },[])

   const getUserId=(id)=>{
        userService.getById(id)
            .then(value => setUser(value))
   }

    const getPostId=(id)=> {
        userService.getAllPosts()
            .then(value =>{
                const filterPost=value.filter(value=>value.userId===id);
                setPosts(filterPost)

    })}

    return (
        <div>
            <div className={'wrap'}>
                <div className={'Users'}> {users.map(value => <User key={value.id} user={value}
                                                                    getUserId={getUserId}/>)}</div>

                 {user && <UserDetails key={user.id} details={user} getPostId={getPostId}/>}

            </div>
            <div className={'postBlock'}> {posts.map(value =>  <Post key={value.id}  post={value} />)}</div>
        </div>
    );
};

export default Users;