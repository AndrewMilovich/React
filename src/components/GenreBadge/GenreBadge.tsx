import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres} from "../../store";
import Genre from "../Genre/Genre";

const GenreBadge: FC = () => {

    const {genre} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllGenres())
    }, [dispatch])

    return (

        <div>
            {genre.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default GenreBadge;