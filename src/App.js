import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navBar';
import Calculator from './components/Calculator';
import Home from './components/home';
import Quote from './components/quote';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  </>
);

export default App;
