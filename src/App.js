import './App.css';
import './css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/page-components/Home'
// import MyLeaguesSB from './components/MyLeaguesSB'
// import FeatureStory from './components/FeatureStory'
// import AdSB from './components/AdSB';

function App() {
  return (
    <div className="App">
      < NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
