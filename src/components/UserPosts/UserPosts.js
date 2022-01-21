import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import UserPost from "../UserPost/UserPost";
import './UserPosts.css'
import {postService} from "../../service/post.service";

const UserPosts = () => {

    const {id} = useParams()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getAll().then(value => setPosts(value.filter(value => value.userId == id)))
    }, [id])

    return (
        <div className={'userPosts'}>
            {posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>

    );
};

export default UserPosts;