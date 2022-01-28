import React, {useEffect, useState} from 'react';
import {charactersService} from "../service/characters.service";
import {Link, NavLink} from "react-router-dom";
import EpisodeDetailsPage from "../pages/EpisodeDetailsPage/EpisodeDetailsPage";
import {episodeService} from "../service/episode.service";

const Episode = ({episodes}) => {

    const {id, name, episode, air_date, characters} = episodes;


const [state,setState]=useState([])
    useEffect(() => {
        charactersService.getById(id).then(value => setState(value))
    }, [id])
console.log(state)

    return (
        <div className={'episode'}>
            <h2>{name}</h2>
            <h2>{episode}</h2>
            <h3>{air_date}</h3>
            {/*<NavLink to={'/episodeDetails'}>*/}

                <button  >episodes details</button>
            {/*</NavLink>*/}

        </div>
    );
};

export default Episode;