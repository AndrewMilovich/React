import React, {useEffect, useState} from 'react';
import Post from "./Post/Post";
import User from "../Users/User/User";
const Posts = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[])
    return (
        <div className={'Posts'}>
            {posts.map(value => <Post id={value.id} title={value.title}
                                      body={value.body} />)}
        </div>
    );
};

export default Posts;