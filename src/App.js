import { Navigate, Routes, Route, Link } from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import logo from './logo.svg';
import './App.css';

const contentStyle = {
  width: '100%',
  height: '100%'
}

function App() {
  return (
    <div className="h-100 d-flex flex-column">
      <header>
        <div className="home-nav">
          <a>
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <h1>Employee Details</h1>
        </div>
        <ul className="menu-items">
          <Link path="/employee">Add</Link>
        </ul>
      </header>
      <div style={contentStyle}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/employee" />} />
          <Route path="employee/*" element={<EmployeeDetails />} />
        </Routes>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
