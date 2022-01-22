import React from 'react';

const Photo = ({photo}) => {
    const {albumId, id, title, url, thumbnailUrl} = photo
    return (
        <div>
            <h2>albumId:{albumId}</h2>
            <h3>id:{id}</h3>
            <p>title:{title}</p>
            url:<img src={url} alt="placehoder600"/>
            thumbnailUrl:<img src={thumbnailUrl} alt="placehoder150"/>
        </div>
    );
};

export default Photo;