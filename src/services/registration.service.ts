import {ILogin, IUser} from "../interfaces/user.interface";
import {axiosServiceReg} from "./axios.service";
import {urls} from "../constants";

export  const registrationService={
    registration: (data:IUser)=>axiosServiceReg.post<IUser>(urls.registration,data),
    login: (data:ILogin)=>axiosServiceReg.post<ILogin>(urls.login,data)
}