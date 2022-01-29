import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";

import {charactersService} from "../../service/characters.service";
import Characters from "../../components/Characters/Characters";

const EpisodeDetailsPage = () => {

  const  {characterId}=useParams()

const[state,setState]=useState([])

    useEffect(()=>{
        charactersService.getById(characterId).then(value => setState([...value]))
    },[])

    return (
        <div className={'characters'}>
            {state.map(value => <Characters key={value.id} value={value} />)}
        </div>
    );
};

export default EpisodeDetailsPage;