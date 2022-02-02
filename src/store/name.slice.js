import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    names: [],
    counter: 0,
    checkCounter: 0
}

const nameSlice = createSlice({
        name: 'nameSlice',
        initialState,
        reducers: {
            addName: (state, action) => {
                state.names.push({
                    id: new Date().getTime(),
                    name: action.payload.data,
                    status: false,
                    counter: state.counter++
                })
            },
            deleteName: (state, action) => {
                let filter = state.names.filter(name => name.id !== action.payload.id);
                let length = filter.filter(value => value.status === true).length;
                state.names = filter

                counter: state.counter--

                if (state.names.status === true) {
                    counter:state.checkCounter--
                } else {
                    state.checkCounter = length
                }
            },
            changeStatus: (state, action) => {
                let find = state.names.find(name => name.id === action.payload.id);
                find.status = !find.status
                if (find.status === true) {
                    checkCounter:state.checkCounter++
                } else {
                    checkCounter:state.checkCounter--
                }


            }
        }
    }
)

const nameReducer = nameSlice.reducer
export const {addName, deleteName, changeStatus} = nameSlice.actions;
export default nameReducer
