import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducers";
import eventReducer from "./reducers/eventReducers";

export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        eventReducer: eventReducer
    }
})