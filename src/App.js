import './App.css';
import Home from './components/Home';
import BandList from './components/BandList';
import BandDetailView from './components/BandDetailView';
import NavBar from './components/NavBar'
import BandNew from './components/BandNew';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/bands" element={ <BandList /> } >
            <Route path=":bandId" element={ <BandDetailView /> } />
          </Route>
          <Route path="/bandnew" element={ <BandNew /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;