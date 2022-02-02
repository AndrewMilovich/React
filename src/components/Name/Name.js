import React from 'react';
import {useDispatch} from "react-redux";

import {changeStatus, deleteName} from "../../store";
import './Name.css'

const Name = ({name: {id, name, status}}) => {

    const dispatch = useDispatch()

    return (
        <div>
            <div className={'name'}>
                <div><input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/></div>
                <h3 className={status ? 'completed' : 'none'}>{name}</h3>
                <div>
                    <button onClick={() => dispatch(deleteName({id}))}>delete</button>
                </div>
            </div>
        </div>
    );
};

export default Name;