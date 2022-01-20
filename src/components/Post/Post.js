import React from 'react';


import './Post.css'


const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div className={'post'}>

                <div>
                    <div>Id:{id} </div>
                    <div>Title:{title}</div>
                </div>

        </div>
    );
};

export default Post;