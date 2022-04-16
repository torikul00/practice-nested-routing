import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Account from './Components/Account/Account';
import Home from './Components/Home/Home';
import PersonalInfo from './Components/PersonalInfo/PersonalInfo';
import Profile from './Components/Profile/Profile';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home />}>
          <Route path='profile' element={<Profile />} />
          <Route path='account' element={<Account />} />
          <Route path='personalInfo' element = {<PersonalInfo />} />
        </Route>
      </Routes>
    
    </div>
  );
};

export default App;