
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },

        //on oublie ça fonctionne pas 
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTaskCompletion: (state, action) => {
            state.tasks = state.tasks.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
        },
    },
});

export const { addTask, removeTask, toggleTaskCompletion } = todoSlice.actions;

export default todoSlice.reducer;
