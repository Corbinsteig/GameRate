import './App.css';
import LogoutButton from './Logout/Logout';
import Profile from './Profile/Profile';
import Sidebar from './Sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
    <>
    <Sidebar /> 
    <Profile />
    {/* <LoginButton /> */}
    {/* <LogoutButton /> */}
    </>
    </Router>
  );
}

export default App;
