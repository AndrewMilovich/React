import React from 'react';

const Space = (props) => {
    const {flight_number, mission_name, launch_year, mission_patch_small} = props;
    return (
        <div>

            <h3>{flight_number}</h3>
            <h2>{mission_name}</h2>
            <p>{launch_year}</p>
            <img src ={mission_patch_small}/>

        </div>
    );
};

export default Space;