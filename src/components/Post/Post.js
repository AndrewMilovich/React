import React from 'react';
import {Link} from "react-router-dom";

import './Post.css'

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div className={'post'}>
            <Link state={post}  to={id.toString()} >Id:{id}</Link>
            <div>Title:{title}</div>
        </div>
    );
};

export default Post;