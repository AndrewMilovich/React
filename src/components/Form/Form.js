import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/car.validator";

const Form = ({update}) => {
    const [formError, setFormError] = useState({})
    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        resolver: joiResolver(CarValidator),
        mode: 'onTouched'
    });
    // const deleteCar = (id) => {
    //
    //     carService.deleteById(id).then(value => value.data.delete)
    // }
    const submit = (car) => {
        try {
            const newCar = carService.create(car)
            update(newCar)
        } catch (error) {
            setFormError(error.response.data)
        }
    }
// watch(event=>console.log(event))
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
                <button>Save</button>

            </form>


            {/*<form onSubmit={handleSubmit(deleteCar)}>*/}
            {/*    <div><label>id:<input type="number" defaultValue={''} {...register('id')}/></label></div>*/}
            {/*    <button>delete</button>*/}
            {/*</form>*/}
        </div>
    );
};

export default Form;