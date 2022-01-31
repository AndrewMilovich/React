import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar, updateCar} from "../../store";
import {useParams} from "react-router-dom";

const Car = ({car:{id,model,price,year}}) => {

 const dispatch=useDispatch()
// const {id}=useParams()
    return (
        <div>
            <div>
                <div>Model:{model}</div>
                <div>price:{price}</div>
                <div>year:{year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCar({id}))}>Delete</button>
            <button onClick={()=>dispatch(updateCar({id}))}>Update</button>
        </div>
    );
};

export default Car;