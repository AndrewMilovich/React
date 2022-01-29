import React from 'react';

import './character.css'

const Characters = ({value}) => {

    const {image, name, status, species, gender, location} = value

    return (
        <div className="character">
            <div><img src={image} alt={name}/></div>
            <div >
                <div>
                    Name: <b>{name}</b>
                </div>
                <div>
                    Gender: <b>{gender}</b>
                </div>
                <div>
                    Species: <b>{species}</b>
                </div>
                <div>
                    Status: <b>{status}</b>
                </div>
                <div>
                    Location: <b>{location.name}</b>
                </div>
            </div>
        </div>
    );
};

export default Characters;