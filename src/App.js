import { Navigate, Routes, Route } from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div>
          <a>
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <h1>Employee Details</h1>
        </div>
        <ul>
          <li>Add</li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/employee" />} />
        <Route path="employee/*" element={<EmployeeDetails />} />
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
