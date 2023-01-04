import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/components/Banner/Banner";
import HomePage from "../src/pages/Homepage/Homepage";
import EmployeeList from "../src/pages/EmployeeList/EmployeeList";
import Error404 from "../src/pages/Error404/Error404";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
