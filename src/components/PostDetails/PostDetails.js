import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";

import {postService} from "../../service/post.service";
import './PostDetails.css'

const PostDetails = () => {

    const {id} = useParams();
    const {state} = useLocation()
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state)
            return;
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [id])

    return (
        <div >
            {post && (
                <div className={'postInfo'}>
                    <div>Id:{post.id}</div>
                    <div>UserId:{post.userId}</div>
                    <div>Title:{post.title}</div>
                    <div>Body:{post.body}</div>
                    <Link to={'comments'}>
                    <button>get comments</button>
                    </Link>
                </div>
            )}
<Outlet/>
        </div>
    );
};

export default PostDetails;