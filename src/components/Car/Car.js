import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCar, updateCar} from "../../store";


const Car = ({car}) => {
    const {id, model, price, year} = car
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <div>Model:{model}</div>
                <div>price:{price}</div>
                <div>year:{year}</div>
            </div>
            <button onClick={() => dispatch(deleteCar({id}))}>Delete</button>
            <button onClick={() => dispatch(updateCar({car}))}>Update</button>
        </div>
    );
};

export default Car;