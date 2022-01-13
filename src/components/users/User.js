import React from 'react';


const User = ({user:{id,name,username},getUserId}) => {
    return (

        <div className={'userBlock'}>
           <div> <h2>{id} </h2>
               <h2>{username}</h2>
               <h2> {name}</h2> </div>


            <div> <button className={'buttonUser'} onClick={()=>getUserId(id)}>all information about user</button></div>
        </div>

    );
};

export default User;