import { useState, useEffect } from 'react';
import './App.css';
import './css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/home/Home'
import LeagueHome from './components/leaguehome/LeagueHome';
import MyGWPicks from './components/mygwpicks/MyGWPicks'
import CreateLeague from './components/createleague/CreateLeague';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({username: ''});

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:3000/users', {

        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(response => response.json())
        .then(result => {
          if (result.error) {
            console.error(result.error);
          } else {
            handleUser(result);
          }
        })
    }
  }, [])

  const handleLogin = () => setIsLoggedIn(true);
  // const handleLogout = () => setIsLoggedIn(false);

  function handleUser(result) {
    if (isLoggedIn == false) {
      setIsLoggedIn(true)
    }
    setCurrentUser({
      username: result.username,
      user_cards: result.user_cards
    })
  };


  return (
    <div className="App">
      < NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/league" element={<LeagueHome />} />
        <Route path="/mygwpicks" element={<MyGWPicks />} />
        <Route path="/create-league" element={<CreateLeague />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
