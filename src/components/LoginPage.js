// src/components/LoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();


    const handleLogin = () => {

        if (email === 'vousparlez@trop.com' && password === 'password') {
            dispatch(login());
            //sers a aller vers /welcome
            navigate('/welcome')
            
        } else {
            alert('Email or password is incorrect');
        }
    };
    const navigate = useNavigate();
    return (
        <div>
            <h1>Login</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;
