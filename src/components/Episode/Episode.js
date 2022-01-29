import React, {useEffect, useState} from 'react';
import {charactersService} from "../../service/characters.service";
import {NavLink} from "react-router-dom";
import EpisodeDetailsPage from "../../pages/EpisodeDetailsPage/EpisodeDetailsPage";


const Episode = ({episodes}) => {

    const {id, name, episode, air_date, characters} = episodes;

    let characterId = []
    characterId.push(characters.map(value => value.split('/').pop()))

    return (
        <div className={'episode'}>
            <h2>{name}</h2>
            <h2>{episode}</h2>
            <h3>{air_date}</h3>
            <NavLink to={`/episodeDetails/${characterId}`}>
                <button  >episodes details</button>


            </NavLink>

        </div>
    );
};

export default Episode;