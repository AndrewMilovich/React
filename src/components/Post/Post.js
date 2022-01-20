import React from 'react';
import './Post.css'
import {Link} from "react-router-dom";


const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div className={'post'}>

                <div>
                    <Link to={id.toString()}>Id:{id} </Link>
                    <div>Title:{title}</div>
                </div>

        </div>
    );
};

export default Post;