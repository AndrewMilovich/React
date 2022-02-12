import React, {FC, useRef} from 'react';

import './Search.css'
import {useAppDispatch} from "../../hooks";
import { setFilmName} from "../../store";

const Search: FC = () => {
        const search = useRef<HTMLInputElement>(null)

        const dispatch = useAppDispatch();
        const submit = (e: any) => {
            e.preventDefault()
            if (null !== search.current) {
                const value = search.current.value;
                dispatch(setFilmName(value))
            }
            e.target.reset()
        }

        return (
            <div>
                <div className={'search'}>
                    <form onSubmit={submit}>
                        <div>
                            <input className={'searchInput'} type="search" placeholder={'Find film by name...'} ref={search}/>
                        </div>
                    </form>
                    <button className={'buttonInput'}>Find</button>
                </div>
            </div>
        );
    }
;

export default Search;