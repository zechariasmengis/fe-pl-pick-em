import './App.css';
import './css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/home/Home'
import LeagueHome from './components/leaguehome/LeagueHome';
import MyGWPicks from './components/mygwpicks/MyGWPicks'
import CreateLeague from './components/createleague/CreateLeague';

function App() {
  return (
    <div className="App">
      < NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/league" element={<LeagueHome />} />
        <Route path="/mygwpicks" element={<MyGWPicks />} />
        <Route path="/create-league" element={<CreateLeague />} />
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
