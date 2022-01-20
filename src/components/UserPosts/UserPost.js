import React, {useEffect, useState} from 'react';
import {postService} from "../../service/post.service";
import {useLocation, useParams} from "react-router-dom";
import UserPost from "../UserPost/UserPost";
import {Outlet} from "react-router-dom";
const UserPosts = () => {

    const [posts, setPost] = useState([])
    const {id} = useParams()
    console.log(id);

    useEffect(() => {
        postService.getAll().then(value => setPost(value.data))

    }, [])
    return (
        <div>
            {posts.map(post=>post.title)}
            <Outlet/>
        </div>

    );
};

export default UserPosts;