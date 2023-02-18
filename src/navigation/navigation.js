import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AddCar from "../pages/addCar/AddCar";
import Login from "../pages/login/Login";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddCar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
