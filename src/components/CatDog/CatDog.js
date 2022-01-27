import React from 'react';

import './CatDog.css'

const click = (e) => {
    e.preventDefault()
    console.log(e.target.value)

}
const CatDog = () => {
    return (
        <div>
            <form className={'form'} onSubmit={event => event.preventDefault()}>
                Add Dogs <input name='dogName' type="text"/>
                <button>Save</button>
                Add Cats <input name='catName' type="text"/>
                <button>Save</button>
            </form>
            <hr/>
        </div>
    );
};

export default CatDog;