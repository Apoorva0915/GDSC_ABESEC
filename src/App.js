import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Technology from './Components/Technology';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        {/* NavBar is good */}
        <NavBar />

        <Routes>
        <Route exact path='/' element={<Home/>} />
        </Routes>
        <Routes>
        <Route exact path='/technologies' element={<Technology />} />
        </Routes>
        <Routes>
        <Route exact path='/projects' element={<Projects />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
