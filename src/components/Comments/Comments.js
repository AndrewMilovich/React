import React, {useEffect, useState} from 'react';
import Comment from "./Comment";

const Comments = () => {
    const [Comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))

    }, [])
    return (
        <div className={'Comments'}>
            {Comments.map(value => <Comment id={value.id} name={value.name}
                                      body={value.body} email={value.email}
                                    />)}
        </div>
    );
};

export default Comments;