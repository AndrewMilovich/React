import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {userService} from "../../service/user.service";

const UserDetails = () => {
    const {name} = useLocation()
    const {id} = useParams()
    let [userDetails, setUserDetails] = useState(null);
    useEffect(() => {
        userService.getById(id).then(value => setUserDetails({...value}))
    }, [])
    return (
        <div>
            {userDetails && (
                <div>
                    <h2>{userDetails.id}</h2>
                    <h2>{userDetails.name}</h2>
                    <h4>{userDetails.email}</h4>
                    <h4>{userDetails.address.city}</h4>
                    <h4>{userDetails.address.street}</h4>
                    <h4>{userDetails.phone}</h4>

                </div>

            )}
        </div>
    );
};

export default UserDetails;