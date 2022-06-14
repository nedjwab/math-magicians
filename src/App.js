import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navBar';
import Calculator from './components/Calculator';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  </>
);

export default App;
