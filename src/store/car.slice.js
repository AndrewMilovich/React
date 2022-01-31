import {createSlice} from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        car: {},
    },
    reducers: {
        addCar: (state, action) => {
            let carId = action.payload.id ? action.payload.id : new Date().getTime();
            let index = state.cars.findIndex((item) => item["id"] === carId);

            state.cars[index === -1 ? state.cars.length : index] = {
                id: carId,
                ...action.payload.data,
            };
            state.car = {};
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        updateCar: (state, action) => {
            state.car = { ...action.payload.car };
        },

    }
})
const carReducer = carSlice.reducer
export default carReducer;
export const {addCar, deleteCar, updateCar} = carSlice.actions;