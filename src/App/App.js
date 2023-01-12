import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../components/Banner/Banner";
import HomePage from "../pages/Homepage/Homepage";
import EmployeeList from "../pages/EmployeeList/EmployeeList";
import Error404 from "../pages/Error404/Error404";

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
