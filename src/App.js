import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from './Registration';
import Login from './Routes/login';
function App() {
  return (
    <div className="App">
    <Router>
          <h2 className="Title">Big Bag</h2>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </Router>

  </div>
  );
}

export default App;
