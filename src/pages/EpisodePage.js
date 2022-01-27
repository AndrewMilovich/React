import React, {useEffect, useState} from 'react';

import {episodeService} from "../service/episode.service";
import Episode from "../components/Episode";
import {Link, useParams} from "react-router-dom";

const EpisodePage = () => {

    const {id} = useParams();
    const [episodes, setEpisodes] = useState([])


    useEffect(() => {
        episodeService.getById(id).then(value => setEpisodes([...value.results]))
    }, [id])

    return (
        <div>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}



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