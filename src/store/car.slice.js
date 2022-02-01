import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../service";

const initialState = {
    cars: [],
    car: {},
    carForUpdate:null

}
export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll()
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'cars/addCar',
    async ({data}) => {
        try {
            return await carService.addCar(data)
        } catch (e) {
            return (e.message)
        }
    }
)

export const DeleteCar = createAsyncThunk(
    'cars/deleteCar',
    async ({id}) => {
        try {
            await carService.deleteById(id)
            return id
        } catch (e) {
            return (e.message)
        }
    })

export const UpdateCar=createAsyncThunk(
    'cars/updateCar',
    async ({id,car})=>{
        try {
         const newCar= await carService.updateById(id,car)
            return {car:newCar}
        }
     catch (e){
         return (e.message)
     }
    }
)

const carSlice = createSlice({

    name: 'cars',
    status: null,
    error: null,
    initialState,
    reducers: {
        // addCar: (state, action) => {
        //
        //     let index = state.cars.findIndex((item) => item.id === state.car.id);
        //     state.cars[index === -1 ? state.cars.length : index] =
        //         action.payload.data;
        //     state.car = {};
        //
        // },
        // deleteCar: (state, action) => {
        // },
        updateCar: (state, action) => {
           state.carForUpdate=action.payload.car
        },
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {

        },
        [createCar.fulfilled]: (state, action) => {
            state.cars.push(action.payload)
        },
        [DeleteCar.fulfilled]: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload)
        },
        [UpdateCar.fulfilled]:(state, action)=>{
            const index = state.cars.findIndex(car=>car.id === action.payload.car.id);
            state.cars[index] = action.payload.car
            state.carForUpdate = null
        }
    }
})

const carReducer = carSlice.reducer
export default carReducer;
export const {updateCar} = carSlice.actions;