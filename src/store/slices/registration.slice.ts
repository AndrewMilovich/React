import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ILogin, IUser} from "../../interfaces/user.interface";
import {registrationService} from "../../services/registration.service";
const initialState={
    result:[]
}
export const registrationUser=createAsyncThunk(
    'registration/user',
    async (data:IUser,{dispatch,getState})=>{
        console.log(data)
        await registrationService.registration(data)
    }
)
export const loginUser=createAsyncThunk(
    'login/user',
    async (data:ILogin,{dispatch,getState})=>{
        const axiosResponse = await registrationService.login(data);
        const data1 = axiosResponse.data;
        // @ts-ignore
        const { user }=data1
        console.log(user)
    }
)

const registrationSlice=createSlice({
    name:'registration',
    initialState,
    reducers:{

    }
})
const registrationReducer=registrationSlice.reducer;
export default  registrationReducer;