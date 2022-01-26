import React from 'react';

const Episode = ({episode}) => {
    const {id,name,air_date}=episode
    return (
        <div>
            {id}==={name}==={air_date}}
        </div>
    );
};

export default Episode;