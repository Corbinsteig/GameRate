import './App.css';
import LogoutButton from './Logout/Logout';
import Profile from './Profile/Profile';
import Sidebar from './Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Profilepage from '../Pages/Profilepage';

function App() {
  return (
    <Router>
      
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path='/profile' element={<Profilepage/>} />
    </Routes>
    <Sidebar /> 
    <Profile />


    </Router>
  );
}

export default App;
