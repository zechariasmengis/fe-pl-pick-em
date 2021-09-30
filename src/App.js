import './App.css';
import './css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import MyLeaguesSB from './components/MyLeaguesSB'
import FeatureStory from './components/FeatureStory'
import AdSB from './components/AdSB';

function App() {
  return (
    <div className="App">
      < NavBar />
      <div className="hp-body">
        < MyLeaguesSB />
        < FeatureStory />
        < AdSB />
      </div>
    </div>
  );
}

export default App;
