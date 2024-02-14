import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { addTask } from '../redux/todoSlice';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
    const dispatch = useDispatch();
    //je recupere et je stock tasks grace un useSelector (state => state.todo.tasks )
    const tasks = useSelector(state => state.todo.tasks);

    // j'utilise useNavigate pour voyager dans mes routes
    const navigate = useNavigate();
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };


    // fonctionnalité to do 
    const handleAddTask = () => {
        if (newTaskTitle.trim() !== '') {
            dispatch(addTask({ id: Date.now(), title: newTaskTitle, completed: false }));
            setNewTaskTitle('');
        }
    };

    return (
        <div>
            <h1>Welcome</h1>
            <p>Welcome to our app!</p>
            <button onClick={handleLogout}>Logout</button>
            <h2>Tasks:</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title} - {task.completed ? 'Completed' : 'Incomplete'}
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={e => setNewTaskTitle(e.target.value)}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    );
}

export default WelcomePage;
