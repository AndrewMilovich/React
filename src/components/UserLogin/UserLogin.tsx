import React, {FC} from 'react';

import './UserLogin.css'
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {useForm} from "react-hook-form";
import {ILogin} from "../../interfaces/user.interface";
import {loginUser} from "../../store/slices/registration.slice";

const UserLogin: FC = () => {
    const dispatch = useAppDispatch()
    const {handleSubmit, register} = useForm()
    const submit: any = async (data: ILogin) => {
        await dispatch(loginUser(data));

    }
    return (
        <div className={'userReg'}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'registration'}>
                    <div><input type="text" placeholder={'email'}{...register('email')}/></div>
                    <div><input type="text" placeholder={'password'}{...register('password')}/></div>
                </div>
                <div>
                    <button>Login</button>

                </div>
                <a href="#"><h4>Forgot Password?</h4></a>

                <Link to={'/registration'}>
                    <button>
                        Registration new account
                    </button>
                </Link>
            </form>

        </div>
    );
};

export default UserLogin