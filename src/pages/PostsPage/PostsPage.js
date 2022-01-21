import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../service/post.service";
import Post from "../../components/Post/Post";
import './PostPage.css'

const PostsPage = () => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            <div className={'postPage'}>
                <div className={'posts'}>
                    {posts.map(post => <Post key={post.id} post={post}/>)}
                </div>
                <div className={'postDetails'}><Outlet/></div>
            </div>
        </div>
    );
};

export default PostsPage;