import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/car.validator";

const Form = ({update,updateCar:{id,model,price,year}}) => {

    const [formError, setFormError] = useState({})

    const {register, handleSubmit ,setValue, formState: {errors}} = useForm({
        resolver: joiResolver(CarValidator),
        mode: 'onTouched'
    });
useEffect(()=>{
    setValue('model', model)
    setValue('price', price)
    setValue('year', year)
},[id])
    const submit = (car) => {
        try {
            let newCar;
            if (id) {
                 newCar = carService.updateById(id, car)}
            else {
                newCar = carService.create(car)

            }
            update(newCar)
        }

        catch (error) {
            setFormError(error.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model:<input type="text" defaultValue={''} {...register('model')}/></label></div>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price:<input type="text" defaultValue={''} {...register('price')}/></label></div>
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year:<input type="text" defaultValue={''} {...register('year')}/></label></div>
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                {errors.year && <span>{errors.year.message}</span>}
                <button> {id?'update':'save'} </button>
            </form>

        </div>
    );
};

export default Form;