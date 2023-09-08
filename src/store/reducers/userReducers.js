import { createReducer } from "@reduxjs/toolkit";
import { user_photo, user_login, user_token } from '../actions/userActions';

const initialState = {
    // name: 'Eric',
    // photo: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
    user: null,
    token: null
}

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo, (state, action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        })
        .addCase(user_login.fulfilled, (state, action) => {

            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_token, (state, action) => {

            return {
                ...state,
                user: action.payload.user,
            }
        })
)

export default userReducer