import React from 'react';

import './Comment.css'

const Comment = ({comment}) => {

    const{id,name,email,body}=comment;

    return (
        <div className={'comment'}>
            <h2>id:{id}</h2>
            <h2>Name:{name}</h2>
            <p>email:{email}</p>
            <p>body:{body}</p>
        </div>
    );
};

export default Comment;