import React, {FC, useEffect} from 'react';
import {useParams} from "react-router";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getInformationByFilm} from "../../store";
import {IMovieDetailInterface} from "../../interfaces/movieDetail.interface";
import {urls} from "../../constants";
import './MovieListCard.css'
import StarsRating from "../StarsRating/StarsRating";


const MoviesListCard: FC = () => {

    const {data} = useAppSelector(state => state.movieReducer);

    const {id} = useParams()

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id != null) {
            dispatch(getInformationByFilm(id))
        }
    }, [id])
    const {
        original_title,
        poster_path,
        overview,
        release_date,
        genres,
        backdrop_path,
        tagline,
        production_countries
    } = data as IMovieDetailInterface

    return (
        <div>
            <div className={'filmContainer'}>
                <div className={'leftBox'}>
                    <div>
                        <img className={'filmImage'} src={`${urls.image}/${poster_path}`} alt="movie"/>
                    </div>
                    <div className={'release_date'}>
                        Production Countries:{production_countries?.map((country, index) => <span
                        key={index}> {country.name}</span>)}
                    </div>
                    <div className={'release_date'}>Data:{release_date}</div>
                </div>
                <div className={'infoFilm'}>
                    <h1 className={'nameFilm'}>{original_title}</h1>
                    <div className={'genresName'}> Genres:{genres?.map((genre, index) => <span
                        key={index}>{genre.name}</span>)}</div>
                    <div className={'overview'}>{overview}</div>
                    <div><img width={'700px'} src={`${urls.image}/${backdrop_path}`} alt="movie"/></div>
                    <div className={'release_date'}>{tagline}</div>
                    <StarsRating/>

                </div>

            </div>

        </div>
    );
};

export default MoviesListCard;