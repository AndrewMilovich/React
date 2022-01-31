import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {addCar} from "../../store";
import {CarValidator} from "../../validation/car.validator";
import {joiResolver} from "@hookform/resolvers/joi";

const Form = () => {

    const {register, handleSubmit, reset, setValue,formState: {errors}} = useForm({  resolver: joiResolver(CarValidator),
        mode: 'onTouched'})

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
                <div><label>Model:<input type="text" {...register('model')}/></label></div>
                <div>{errors.model && <span>{errors.model.message}</span>}</div>
                <div>{errors.price && <span>{errors.price.message}</span>}</div>
                <div><label>Price:<input type="text" {...register('price')}/></label></div>
                <div>{errors.year && <span>{errors.year.message}</span>}</div>
                <div><label>Year:<input type="text" {...register('year')}/></label></div>
                <button>{car.id ? "Update" : "Create"}</button>

            </form>
        </div>
    );
};

export default Form;