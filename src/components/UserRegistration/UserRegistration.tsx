import React, {FC} from 'react';
import { useForm } from 'react-hook-form';
import {IUser} from "../../interfaces/user.interface";
import {useAppDispatch} from "../../hooks";
import {registrationUser} from "../../store/slices/registration.slice";
import {Link} from "react-router-dom";

const UserRegistration: FC = () => {
    const dispatch=useAppDispatch()
    const {handleSubmit,register}=useForm()
const submit:any = (data:IUser) => {
console.log(data)
    dispatch(registrationUser(data))
}

    return (
        <div className={'userReg'}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'registration'}>
                    <div><input type="text" placeholder={'firstName'}{...register('firstName')}/></div>
                    <div><input type="text" placeholder={'lastName'}{...register('lastName')}/></div>
                    <div><input type="number" placeholder={'age'}{...register('age')}/></div>
                    <div><input type="text" placeholder={'phone'}{...register('phone')}/></div>
                    <div><input type="text" placeholder={'email'}{...register('email')}/></div>
                    <div><input type="text" placeholder={'password'}{...register('password')}/></div>
                    <div>
                        {/*<Link to={'/user/id'}>*/}
                            <button >Registration</button>
                        {/*</Link>*/}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserRegistration