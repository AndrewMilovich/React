import React from 'react';

const UserDetails = ({
    details:{name,username,email,city,street,suite,zipcode,phone}
                     }) => {
    return (
        <div>

            <div className={'infoUser'}>

                <div><h2>{name} {username}</h2>
                    <h3>{email}</h3></div>
                Address:
                <ul>
                    <li>{city}</li>
                    <li>{street}</li>
                    <li>{suite}</li>
                    <li>{zipcode}</li>
                    <li>{phone}</li>
                </ul>

            </div>


        </div>
    );
};

export default UserDetails;