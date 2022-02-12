import React from 'react';
import './Switch.css'

const Switch = () => {
    const id = document.getElementById('root');
    id?.classList.add('theme')
    const theme = () => {
        if (id !== null) {
            id.classList.toggle('active')

        }
    }
    return (
        <div>
            <label className={"switch"}>
                <input onClick={theme} type={"checkbox"}/>
                <span className={"slider round"}></span>
            </label>

        </div>
    );
};

export default Switch;