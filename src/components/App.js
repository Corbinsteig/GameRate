import './App.css';
import LogoutButton from './Logout/Logout';
import Profile from './Profile/Profile';
import Sidebar from './Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Profilepage from '../Pages/Profilepage';
import React from 'react';
import Post from './Post/Post';

function App() {
  return (
    <Router>
      
    <Sidebar /> 
    <div className='App__content'>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path='/profile' element={<Profilepage/>} />
    </Routes>
    <Profile />

    </div>
    </Router>
    
  );
}

export default App;
