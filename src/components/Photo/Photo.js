import React from 'react';

const Photo = ({photo}) => {
    const {albumId, id, title, url, thumbnailUrl} = photo
    return (
        <div>
            <h2>albumId:{albumId}</h2>
            <h3>id:{id}</h3>
            <p>title:{title}</p>
            <p>url:{url}</p>
            <p>thumbnailUrl:{thumbnailUrl}</p>
        </div>
    );
};

export default Photo;