import React from 'react';

import {actions} from "../../constants/actions";

const Dog = ({dog, dispatch}) => {
    return (
        <div>
            DogName:{dog.dog}
            <button onClick={() => dispatch({type: actions.DeleteDog, payload: dog.id})}>Delete</button>
        </div>
    );
};

export default Dog;