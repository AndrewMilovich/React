import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IResults} from "../../interfaces/movie.interface";
import {urls} from "../../constants";
import './MovieList.css'

const MoviesList: FC<{ results: IResults }> = ({results}) => {
    const {id, title, poster_path} = results;

    return (
        <div>
            <Link to={`/movies/${id}/details`}>
                <div className={'filmBox'}>
                    <div><img width={'220px'} src={`${urls.image}/${poster_path}`} alt="movie"/></div>
                    <div className={'filmName'}><h4>{title}</h4></div>
                </div>
            </Link>
        </div>
    );
};

export default MoviesList;