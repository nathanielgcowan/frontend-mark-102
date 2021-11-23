import './App.css';
import Home from './Home';
import SecondView from './SecondView';
import BandList from './BandList';
import BandDetailView from './BandDetailView';
import BandNew from './BandNew';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BandData from './data.json';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const bands = BandData.map(bands => {
    return { ...bands, id: uuidv4() }
  })

  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
          <Link to="/"><div>Home</div></Link>
          <Link to="/bands"><div>List of Bands</div></Link>
          <Link to="/bandnew"><div>New Band</div></Link>
        </div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/secondview" element={ <SecondView /> } />
          <Route path="/bands" element={ <BandList bands={ bands }/> } >
            <Route path=":bandId" element={ <BandDetailView bands={ bands } /> } />
          </Route>
          <Route path="/bandnew" element={ <BandNew /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;