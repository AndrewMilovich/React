import React from 'react';






const User = ({user:{id,name,username},getUserId,GetPost}) => {
    return (
        <div className={'userBlock'}>
        <div className={'User'}>
           <div className={'nameUser'}> <h2>{id}   -   {name}  -  {username}</h2></div>
            <button className={'buttonPost'}>get Post</button>
        </div>
            <div> <button className={'buttonUser'} onClick={()=>getUserId(id)}>all information about user</button></div>
        </div>
    );
};

export default User;