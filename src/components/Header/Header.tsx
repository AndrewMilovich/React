import React, {FC} from 'react';
import { Link } from 'react-router-dom';

import './Header.css'
import Switch from "../Switch/Switch";
import UserInfo from '../../UserInfo/UserInfo';

const Header: FC = () => {


    return (
        <div>
            <div>

                <h1 className={'header'}>
                    <div className={'switch'}><Link to={'movies/1'}>
                        <div className={'logo'}></div>
                    </Link></div>
                    Film Collapse
                    <Switch/>
                    <UserInfo/>
                </h1>

            </div>
        </div>
    );
};

export default Header;