import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {addCar} from "../../store";

const Form = () => {

    const {register, handleSubmit, reset, setValue} = useForm()

    const {car} = useSelector((state) => state["carReducer"]);

    const dispatch = useDispatch()

    useEffect(() => {
        setValue('model', car.model)
        setValue('price', car.price)
        setValue('year', car.year)
    }, [car.id])

    const submit = (data) => {
        dispatch(addCar({data, id: car.id}));
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model:<input type="text" {...register('model')}/></label>
                <label>Price:<input type="text" {...register('price')}/></label>
                <label>Year:<input type="text" {...register('year')}/></label>
                <button>{car.id ? "Update" : "Create"}</button>

            </form>
        </div>
    );
};

export default Form;