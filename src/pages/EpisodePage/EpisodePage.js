import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import {episodeService} from "../../service/episode.service";
import Episode from "../../components/Episode";
import './EpisodePage.css'

const EpisodePage = () => {

    const {id} = useParams();
    const [episodes, setEpisodes] = useState([])


    useEffect(() => {
        episodeService.getById(id).then(value => setEpisodes([...value.results]))
    }, [id])

    return (
        <div>
            <div className={'episodes'}>{episodes.map(episode => <Episode key={episode.id} episodes={episode} />)}</div>
            <Link to={`/episodes/${+id -1}`}>
                <button>prev</button>
            </Link>

            <Link to={`/episodes/${+id + 1}`}>
                <button>next</button>
            </Link>

        </div>
    );
};

export default EpisodePage;