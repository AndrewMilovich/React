import React from 'react';

const UserDetails = ({
    details:{id,name,username,email,address:{city,street,suite,zipcode},phone},getPostId
                     }) => {
    return (
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
                <button onClick={()=>getPostId(id)}> get Post</button>
        </div>
    );
};

export default UserDetails;