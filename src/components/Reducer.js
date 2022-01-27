import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch ( action.type) {
        case 'inc':
            if (action.target==='count1') {
                return {...state, count1: state.count1 + 1}
            }
            if ((action.target==='count2')){
                return {...state, count2: state.count2 + 1}
            }
            if ((action.target==='count3')){
                return {...state, count3: state.count3 + 1}
            }
        case 'dec':
            if (action.target==='count1') {
                return {...state, count1: state.count1 - 1}
            }
            if ((action.target==='count2')){
                return {...state, count2: state.count2 - 1}
            }
            if ((action.target==='count3')){
                return {...state, count3: state.count3 - 1}
            }
        case 'reset':
            if (action.target==='count1') {
                return {...state, count1: 0}
            }
            if ((action.target==='count2')){
                return {...state, count2: 0}
            }
            if ((action.target==='count3')){
                return {...state, count3: 0}
            }
        default:
            throw new Error('error')
    }
    return state
}


const Reducer = () => {
    const [state, dispatch] = useReducer( reducer, {count1: 0, count2: 0, count3: 0})

    return (
        <div>
            <div>
                <div>{state.count1}</div>
                <button onClick={() => dispatch({type: 'inc', target:'count1'})}>Increment</button>
                <button onClick={() => dispatch({type: 'dec',target:'count1'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset',target:'count1'})}>Reset</button>
            </div>

            <div>
                <div>{state.count2}</div>
                <button onClick={() => dispatch({type: 'inc',target:'count2'})}>Increment</button>
                <button onClick={() => dispatch({type: 'dec',target:'count2'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset',target:'count2'})}>Reset</button>
            </div>

            <div>
                <div>{state.count3}</div>
                <button onClick={() => dispatch({type: 'inc',target:'count3'})}>Increment</button>
                <button onClick={() => dispatch({type: 'dec',target:'count3'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset',target:'count3'})}>Reset</button>
            </div>


        </div>
    );
};

export default Reducer;