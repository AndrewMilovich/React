import React from 'react';
import {Link} from "react-router-dom";

import './Post.css'
import SinglePostPage from "../../pages/SinglePostPage/SinglePostPage";

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div className={'post'}>
            <Link state={post}  to={id.toString()} >Id:{id}</Link>
            <div>Title:{title}</div>
           <button onClick={()=>console.log('click')}>details</button>
        </div>
    );
};

export default Post;