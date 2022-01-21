import React from 'react';
import {Link} from "react-router-dom";

import './Album.css'

const Album = ({album}) => {

    const {userId, id, title} = album

    return (
        <div className={'album'}>
            <h1>userId:{userId}</h1>
            <h2>Id:{id}</h2>
            <h3>Title:{title}</h3>

            <Link to={`photos`}>
                <button>Photos</button>
            </Link>
        </div>
    );
};

export default Album;