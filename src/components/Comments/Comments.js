import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Comment from "../Comment/Comment";
import {commentsService} from "../../service/comments.service";

const Comments = () => {

    const {id} = useParams()
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAll().then(value => setComments(value.filter(value => value.postId == id)))
    }, [id])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;