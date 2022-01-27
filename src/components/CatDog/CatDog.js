import React from 'react';
import {useReducer} from "react";
import {useForm} from "react-hook-form";

import './CatDog.css'
import Cat from "../Cat/Cat";
import Dog from "../Dog/Dog";
import { actions} from "../../constants/actions";

const CatDog = () => {



    const reducer = (state, action) => {
        switch (action.type) {
            case actions.AddCat:
                return {...state, cat: [...state.cat, action.payload]}
            case actions.AddDog:
                return {...state, dog: [...state.dog, action.payload]}
            case actions.DeleteCat:
                return {...state, cat: state.cat.filter(cat => cat.id !== action.payload.id)}
            case actions.DeleteDog:
                return {...state, dog: state.dog.filter(dog => dog.id !== action.payload.id)}
            default:
                return {...state}
        }
    }


    const {register, handleSubmit} = useForm()

    const [state, dispatch] = useReducer(reducer, {cat: [], dog: []})




    const submitCat = (data) => {
        const obj = {cat: data.cat, id: Math.random()}
        dispatch({type: actions.AddCat, payload: obj})
    }

    const submitDog = (data) => {
        const obj = {dog: data.dog, id: Math.random()}
        dispatch({type: actions.AddDog, payload: obj})

    }

    return (

        <div>
            <div className={'form'}>
                <form onSubmit={handleSubmit(submitDog)}>
                    <label>Add Dogs:<input type="text" defaultValue={''} {...register('dog')}/></label>
                    <button>Save</button>
                </form>

                <form onSubmit={handleSubmit(submitCat)}>
                    <label>Add Cats:<input type="text" defaultValue={''} {...register('cat')}/></label>
                    <button>Save</button>
                </form>
            </div>
            <hr/>
            <div className={'animal'}>
                <div>
                    {state.dog && state.dog.map(value => <Dog key={value.id} dog={value} dispatch={dispatch}/>)}
                </div>

                <div>
                    {state.cat && state.cat.map(value => <Cat key={value.id} cat={value} dispatch={dispatch} />)}

                </div>
            </div>
        </div>
    );
};

export default CatDog;