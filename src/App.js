import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from './Registration';
import Login from './routes/login';
import Home from './routes/home';
function App() {
  return (
    <div className="App">
      <Router>
        <h2 className="Title">Big Bag</h2>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
