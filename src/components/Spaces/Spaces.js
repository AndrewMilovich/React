import React, {useEffect, useState} from 'react';
import Space from "./Space";

const Spaces = () => {
    const [spaces,setSpace]=useState([]);
   useEffect(()=>{
       fetch('https://api.spacexdata.com/v3/launches/')
           .then(value => value.json())
           .then(value =>  {
               const filteredSpaces = value.filter(value => value.launch_year!=='2020')
               setSpace(filteredSpaces)
           })},[])

    return (
        <div>
            {spaces.map(value => <Space flight_number={value.flight_number}
                                        mission_name={value.mission_name}
                                        launch_year={value.launch_year}
                                        mission_patch_small={value.links.mission_patch_small}
            />)
            }
        </div>
    );
};

export default Spaces;