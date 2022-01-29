import React, {useEffect, useState} from 'react';
import {charactersService} from "../../service/characters.service";
import {useLocation, useParams} from "react-router-dom";


const EpisodeDetailsPage = ({characterId}) => {
    useEffect(()=>{
        charactersService.getById(characterId).then(value => console.log(value))
    },[characterId])
    return (
        <div>

            {/*{ state &&(*/}
            {/*<div>*/}
            {/*{state.id}*/}
            {/*{state.name}*/}
            {/*</div>*/}
            {/*)}*/}
        </div>
    );
};

export default EpisodeDetailsPage;