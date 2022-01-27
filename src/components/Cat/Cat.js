import React, {useState} from 'react';

import {actions} from "../../constants/actions";


const Cat = ({cat,dispatch}) => {

    return (
        <div>
            CatName:{cat.cat}
            <button onClick={()=>dispatch({type:actions.DeleteCat, payload:cat.id})}>Delete</button>
        </div>
    );
};

export default Cat;