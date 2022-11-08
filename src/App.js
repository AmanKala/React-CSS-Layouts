import Navbar from "./Components/Navbar";
import CardsContainer from "./Components/CardsConatiner";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' exact element=<Home/> />
          <Route path='/cards' exact element=<CardsContainer/> />
          <Route path='/about' exact element= <About/> />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
