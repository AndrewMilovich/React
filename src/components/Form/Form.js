import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addCar, updateCar} from "../../store";

const Form = () => {

    const {register, handleSubmit, reset,setValue} = useForm()

    const {cars:{id,model,price,year}} = useSelector(state => state.carReducer);

    const dispatch = useDispatch()

    const submit = (data) => {
        data.id?dispatch(updateCar({data})):dispatch(addCar({data}))

        reset()
    }

    useEffect(()=>{
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    },[id])

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model:<input type="text" {...register('model')}/></label>
                <label>Price:<input type="text" {...register('price')}/></label>
                <label>Year:<input type="text" {...register('year')}/></label>
                <button>Save</button>

            </form>
        </div>
    );
};

export default Form;