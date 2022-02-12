import React, {FC} from 'react';

import './UserRegistration.css'

const UserRegistration: FC = () => {
    return (
        <div className={'userReg'}>
            <h2>Login</h2>
            <form>
                <div className={'registration'}>
                    <div><input type="text" placeholder={'Login'}/></div>
                    <div><input type="password" placeholder={'Password'}/></div>
                    <div>
                        <button>Login</button>
                    </div>
                </div>
                <a href="#"><h4>Forgot Password?</h4></a>
                <button><a href="#">
                    Registration new account
                </a></button>
            </form>

        </div>
    );
};

export default UserRegistration