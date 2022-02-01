import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import { createCar, UpdateCar} from "../../store";
import {CarValidator} from "../../validation/car.validator";

const Form = () => {
    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({
        resolver: joiResolver(CarValidator),
        mode: 'onTouched'
    })

    const {car, carForUpdate} = useSelector((state) => state.cars);

    const dispatch = useDispatch()

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    const submit = (data) => {
        if (carForUpdate) {
            dispatch(UpdateCar({id:carForUpdate.id, car:data}))
        } else {
        dispatch(createCar({data, id: car.id}));
        }
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
                <button>{carForUpdate ? "Update" : "Create"}</button>

            </form>
        </div>
    );
};

export default Form;