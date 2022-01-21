import React from 'react';
import {Link} from "react-router-dom";

import './Post.css'

const Post = ({post}) => {

    const {id,title} = post;

    return (
        <div className={'post'}>
                <div>
                    <Link to={id.toString()} state={post}>Id:{id}
                    <div>Title:{title}</div>
                    </Link>
                </div>
        </div>
    );
};

export default Post;