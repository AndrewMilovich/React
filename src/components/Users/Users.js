import React, {useEffect, useState} from 'react';
import User from "./User/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))

    }, [])
    return (
        <div className={'Users'}>
            {users.map(value => <User id={value.id} name={value.name}
                                      username={value.username} email={value.email} street={value.address.street}
                                      suite={value.address.suite} city={value.address.city}/>)}
        </div>
    );
};

export default Users;