import React from 'react';

const Post = (props) => {
    const {id,title,body} = props;
    return (
        <div className={'Post'}>
           <h2>id: {id}</h2>
           <p>title: {title}</p>
           <h4>body: {body}</h4>
        </div>
    );
};

export default Post;