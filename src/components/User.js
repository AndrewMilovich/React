import React, {useEffect, useState} from 'react';

const User = ({user: {id, name, email}}) => {

    return (
        <div>
            <h2 className={'User'}>{id}) {name} -- {email}</h2>
        </div>
    );
};

export default User;