import React from 'react';

const Post = ({post:{title,body,userId}}) => {
    return (
        <div className={'post'}>
            {userId}
            <p>title:{title}</p>
            <p>Body:{body}</p>
        </div>
    );
};

export default Post;