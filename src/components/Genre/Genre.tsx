import React, {FC} from 'react';

import {useAppDispatch} from "../../hooks";
import {IGenreProp} from '../../interfaces';
import {setMovieGenre} from "../../store";
import './Genre.css'

const Genre: FC<{ genre: IGenreProp }> = ({genre}) => {

    const dispatch = useAppDispatch();
    const {name} = genre

    return (
        <div className={'genre'}>
            <div className={'filmName'} onClick={() => dispatch(setMovieGenre({genre}))}>{name}</div>
        </div>
    );
};

export default Genre;