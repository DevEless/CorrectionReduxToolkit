// src/redux/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentTheme: 'light',
    //theme de base définis
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            // change ton etat initiale avec action.playload
            state.currentTheme = action.payload;
        },
    },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;

