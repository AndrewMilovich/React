import React from 'react';

import './UserPost.css'

const UserPost = ({post}) => {

    const {title,id,body} = post
    return (
        <div className={'userPost'}>
            <div ><h2>id:{id}</h2>
                <p>title:{title}</p>
                <p>body:{body}</p></div>

        </div>
);
};
export default UserPost;