import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {postService} from "../../service/post.service";
import './SinglePostPage.css'

const SinglePostPage = () => {
    const {id} = useParams();
    const {state} = useLocation()
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [])

    return (
        <div>
            {post && (
                <div className={'singlePost'}>
                    <div>Id:{post.id}</div>
                    <div>UserId:{post.userId}</div>
                    <div>Title:{post.title}</div>
                    <div>Body:{post.body}</div>
                </div>
            )}
        </div>
    );
};

export default SinglePostPage;