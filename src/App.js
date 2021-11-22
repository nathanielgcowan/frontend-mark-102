import './App.css';
import Home from './Home';
import SecondView from './SecondView';
import ContactList from './ContactList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactData from './data.json';

function App() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <Link to="/"><div>Home</div></Link>
          <Link to="/contacts"><div>Contacts </div></Link>
        </div>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="secondview" element={<SecondView /> } />
          <Route path="contacts" element={<ContactList contacts={ContactData }/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;