import React, {useEffect, useState} from 'react';

import {episodeService} from "../service/episode.service";
import Episode from "../components/Episode";
import {Link, useParams} from "react-router-dom";

const EpisodePage = () => {

    const {id} = useParams();
    const [episodes, setEpisodes] = useState([])
    const [info, setInfo] = useState([])

    useEffect(() => {
        episodeService.getById(id).then(value => setEpisodes(value.results))
            .then(value => setInfo(value.info))
    }, [id])

    return (
        <div>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            {info.map(info =>  info.count )}
            <Link to={`/episodes/${+id + 1}`}>
                <button>next</button>
            </Link>
            <Link to={`/episodes/${+id -1}`}>
                <button>prev</button>
            </Link>

        </div>
    );
};

export default EpisodePage;