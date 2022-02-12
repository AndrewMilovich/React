import React, {FC} from 'react';

import {setCurrentPage} from "../store";
import {useAppDispatch, useAppSelector} from "../hooks";


const Button: FC = () => {
    const pages = [1, 2, 3, 4, 5]

    const {currentPage} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch()
    return (
        <div>
            <button onClick={() => dispatch(setCurrentPage(currentPage - 1))}>➢</button>
            {pages.map((page, index) => <button onClick={() =>
                dispatch(setCurrentPage(page))}>key={index}, {page}</button>)}
            <button onClick={() => dispatch(setCurrentPage(currentPage + 1))}>Next Page</button>
        </div>
    );
};

export default Button;