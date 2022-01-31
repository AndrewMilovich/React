import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import {episodeService} from "../../service/episode.service";
import Episode from "../../components/Episode/Episode";
import './EpisodePage.css'

const EpisodePage = () => {

    const {id} = useParams();

    const [episodes, setEpisodes] = useState([])

    const [info, setInfo] = useState([])

    useEffect(() => {
        episodeService.getById(id).then(value => setEpisodes([...value.results]))
    }, [id])

    return (
        <div>
            <div > <h2 className={'headerPage'}>Rick and Morty episodes!</h2></div>
            <div className={'episodes'}>{episodes.map(episode => <Episode key={episode.id} episodes={episode} />)}</div>

            <div className={'buttonPage'}>
                <Link to={`/episodes/${id >= 1 ? +id - 1 : 1}`}>
                <button>prev</button>
            </Link>
                <Link to={`/episodes/${id <= 3 ? +id + 1 : 3}`}>
                    <button>next</button>
                </Link></div>

        </div>
    );
};

export default EpisodePage;