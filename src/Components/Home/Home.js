import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Exploring nested routing </h1>
            <button onClick={() => navigate('/profile')} className='button'>Profile</button>
            <button onClick={() => navigate('/account')} className='button'>Account</button>
            <button onClick={() => navigate('/personalInfo')} className='button'>Personal Info</button>
            
            <Outlet />
            
        </div>
    );
};

export default Home;