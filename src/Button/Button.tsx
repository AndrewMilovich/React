import React, {FC} from 'react';

import {setCurrentPage} from "../store";
import {useAppDispatch, useAppSelector} from "../hooks";
import './Button.css'

const Button: FC = () => {

    const {currentPage} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch()
    return (
        <div className={'buttons'}>
            <button className={'pagination'} onClick={() => dispatch(setCurrentPage(currentPage - 1))}>Previous Page
            </button>
            <button className={'pagination'} onClick={() => dispatch(setCurrentPage(currentPage + 1))}>Next Page
            </button>
        </div>
    );
};

export default Button;