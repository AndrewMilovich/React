import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";

import {charactersService} from "../../service/characters.service";
import Characters from "../../components/Characters/Characters";

const EpisodeDetailsPage = () => {

  const  {characterId}=useParams()

const[state,setState]=useState([])

    useEffect(()=>{
        charactersService.getById(characterId).then(value => setState([...value]))
    },[characterId])

    return (
        <div >
            <div > <h2 className={'headerPage'}>Character  of this episode!</h2></div>
            <div className={'characters'}>
                {state.map(value => <Characters key={value.id} value={value} />)}
            </div>




        </div>
    );
};

export default EpisodeDetailsPage;