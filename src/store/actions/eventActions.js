import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../api";

export const get_events = createAsyncThunk('get_events', async () => {
    try {
        const response = await axios.get(`${apiUrl}/events`)

        // console.log(response.data.events)
        return {
            events: response.data.events
        }
    } catch (error) {
        console.log(error)
    }
})

export const filter_events = createAsyncThunk('filter_events', async (obj) => {
    try {
        const response = await axios.get(`${apiUrl}/events?name=${obj.name}`)
        // console.log(response)
        return {
            events: response.data.events
        }
    } catch (error) {
        
        return {
            events: []
        }
    }
})