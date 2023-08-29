import { createReducer } from "@reduxjs/toolkit";
import { user_photo } from '../actions/userActions';

const initialState = {
    name: 'Eric',
    photo: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
}

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo, (state, action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        })
)

export default userReducer