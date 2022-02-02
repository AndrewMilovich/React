import React, {useRef} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {addName} from "../../store";
import './Form.css'

const Form = () => {

    const nameInput = useRef()
    const dispatch = useDispatch()
    const {counter, checkCounter} = useSelector(state => state['nameReducer'])

    const submit = (e) => {
        e.preventDefault()
        dispatch(addName({data: nameInput.current.value}));
        e.target.reset()
    }

    return (
        <div>
            <div className={'all'}>
                <div className={'headerTolls'}><h2>All:{counter}</h2> <h2>Completed:{checkCounter}</h2></div>
                <form onSubmit={submit}>
                    <input type="text" placeholder={'todo'} ref={nameInput}/>
                    <button>Save</button>
                </form>
            </div>
            <hr/>
        </div>
    );
};

export default Form;