import {configureStore} from "@reduxjs/toolkit";

import nameReducer from "./name.slice";

const store = configureStore({
    reducer: {
        nameReducer
    }
})
export default store
