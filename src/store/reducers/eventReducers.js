import { createReducer } from "@reduxjs/toolkit";
import { filter_events, get_events } from "../actions/eventActions";

const initialState = {
    events: []
}

const eventReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_events.fulfilled, (state, action) => {

            return {
                ...state,
                events: action.payload.events
            }
        })
        .addCase(filter_events.fulfilled, (state, action) => {

            return {
                ...state,
                events: action.payload.events
            }
        })
)

export default eventReducer;