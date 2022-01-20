import React, {useEffect, useState} from 'react';

import {userService} from "../../service/user.service";
import User from "../../components/User/User";
import UserDetails from "../../components/UserDetails/UserDetails";
import './UserPage.css'
import {postService} from "../../service/post.service";
import Post from "../../components/Post/Post";
const UsersPage = () => {
    let [users, setUsers] = useState([]);

    const [user, setUser] = useState(null)
    const [post, setPost] = useState(null)

    const getUser = (user) => {
        setUser(user)
    }

    const getPostId=(id)=> {
       postService.getAll()
            .then(value =>{
                const filterPost=value.filter(value=>value.userId===id);
                setPost(filterPost)

            })}


    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])
    return (
        <div className={'userDetails'}>
            <div className={'users'}>{users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}</div>
            <UserDetails getUser={getUser} userDetails={user} getPostId={getPostId}/>
            {post&& <Post post={post}/>}

        </div>
    );
};

export default UsersPage;