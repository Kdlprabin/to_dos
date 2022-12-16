import './App.css';
import Navigation from "./components/Navigation"
import {Route, Routes} from "react-router-dom"
import Home from "./routes/Home"
import Login from "./routes/Login"
import Add from "./routes/Add"
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add" element={<Add />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
