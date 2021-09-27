import './App.css';
import './css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import MyLeaguesSB from './components/MyLeaguesSB'

function App() {
  return (
    <div className="App">
      < NavBar />
      < MyLeaguesSB />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
