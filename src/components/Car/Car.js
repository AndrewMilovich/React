import React from 'react';
import {carService} from "../../services/carService";

const Car = ({car, update,setUpdateCar}) => {
const {id, model, price, year}=car
        const deleteCar = async () => {
            await carService.deleteById(id)
            update({})
        }

        return (
            <div>
                <div>Id:{id}</div>
                <div>Model:{model}</div>
                <div>Price:{price}</div>
                <div>Year:{year}</div>
                <button onClick={()=>deleteCar()}>delete</button>
                <button onClick={()=>setUpdateCar(car)}>update</button>
                <hr/>
            </div>
        );
    }
;

export default Car;
    