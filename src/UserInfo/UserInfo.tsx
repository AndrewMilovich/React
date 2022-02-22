import React, {FC} from 'react';
import {Link} from "react-router-dom";

import './User.css'

const UserInfo: FC = () => {
    return (
        <Link to={'/user'}>
            <div className={'UserInfo'}>
                <div className={'UserImg'}>
                </div>
                <div className={'UserInformation'}>
                    <p>LOGIN</p>
                </div>
            </div>
        </Link>
    );
};

export default UserInfo;