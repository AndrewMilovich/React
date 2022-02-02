import React from 'react';
import {useSelector} from "react-redux";

import Name from "../Name/Name";
import './Names.css'

const Names = () => {
    const {names} = useSelector(state => state['nameReducer'])
    console.log(names)
    return (
        <div>
            <div className={'names'}>{names.map(name => <Name key={name.id} name={name}/>)}</div>
        </div>
    );
};

export default Names;