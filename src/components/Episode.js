import React, {useEffect, useState} from 'react';
import {charactersService} from "../service/characters.service";
import {Link, NavLink} from "react-router-dom";
import EpisodeDetailsPage from "../pages/EpisodeDetailsPage/EpisodeDetailsPage";


const Episode = ({episodes}) => {

    const {id, name, episode, air_date, characters} = episodes;
// const [state,setState] =useState([])


    let characterId = []
    characterId.push(characters.map(value => value.split('/').pop()))




    return (
        <div className={'episode'}>
            <h2>{name}</h2>
            <h2>{episode}</h2>
            <h3>{air_date}</h3>
            <Link to={<EpisodeDetailsPage characterId={characterId}/>}>
                <button >episodes details</button>
            </Link>

        </div>
    );
};

export default Episode;