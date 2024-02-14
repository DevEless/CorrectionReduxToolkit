// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import themeReducer from './themeSlice';
import todoReducer from './todoSlice'


// chaque slice utiliser devra etre appelé dans le store pour qu'elle soit accessible partout
export default configureStore({
    reducer: {

        // name = nom du fichier importé 
        auth: authReducer,
        theme: themeReducer, 
        todo: todoReducer, 
    },
});
