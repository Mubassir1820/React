import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../feature/counter/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        decounter: counterReducer,
    }
})

export default store;