import React, {FC, useEffect, useRef} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import MoviesList from "../../components/MoviesList/MoviesList";
import {getAllMovies, getFilmsByName, setFilmName} from "../../store";
import Button from "../../Button/Button";
import GenreBadge from "../../components/GenreBadge/GenreBadge";
import Search from '../../components/Search/Search';


const MoviesPage: FC = () => {

    const {results, currentPage, genreId, name, filmName} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (filmName !== '') {
            dispatch(getFilmsByName(filmName))
        } else if (filmName === '') {
            dispatch(getAllMovies(currentPage))
        }
    }, [currentPage, genreId, filmName])

    return (
        <div>

            <div className={'container'}>
                <div>
                    <h2 className={'release_date'}>Genre:</h2>
                    <GenreBadge/>
                </div>

                <div >
                    <Search/>
                    <div className={'blockFilms'}>
                        {filmName === '' && results.map(results => <MoviesList key={results.id} results={results}/>)}
                        {filmName !== '' && name.map(results => <MoviesList key={results.id} results={results}/>)}
                    </div>
                </div>
            </div>
            <Button/>
        </div>

    );
};

export default MoviesPage;