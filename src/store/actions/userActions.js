import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2';
import apiUrl from "../../api";

export const user_photo = createAction('user_photo', (obj) => {
    console.log(obj)

    return {
        payload: {
            photo: obj.photo
        }
    }
})

export const user_login = createAsyncThunk('user_login', async (obj) => {
    try {
        const { data } = await axios.post(`${apiUrl}/auth/signin`, obj.data);
        console.log(data);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))

        Swal.fire({
            title: 'Welcome',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'Ok'
        })

        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log('User action', error);
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        return {
            user: null
        }
    }
})

export const user_token = createAction('user_token', (user) => {
    return {
        payload: {
            user
        }
    }
})