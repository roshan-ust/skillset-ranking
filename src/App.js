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
    <div className="h-100 d-flex flex-column overflow-hidden">
      <header className="d-flex flex-row align-items-center justify-content-between px-2 py-3">
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
      <div style={contentStyle} className="bg-light overflow-auto">
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
