import React from 'react';

const Comment = (props) => {
    const {id, name, email, body} = props;
    return (
        <div className={'Comment'}>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <h4>{body}</h4>
        </div>
    );
};

export default Comment;