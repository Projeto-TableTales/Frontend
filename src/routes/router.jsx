import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import ForgotPassword from "../pages/forgotPassword/forgotPassword";
import Home from "../pages/home/home";
import Apresentacao from "../pages/apresentacao/apresentacao";
import Perfil_Usuario from "../pages/perfil/Perfil_Usuario";
import Info from "../pages/info/info";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/home"
          element={
            localStorage.getItem("token") ? <Home /> : <Navigate to="/login" />
          }
        />
        <Route path="/" exact element={<Apresentacao />} />
        <Route
          path="/perfil"
          element={
            localStorage.getItem("token") ? <Home /> : <Navigate to="/login" />
          }
        /> 
        <Route path="/perfil" element={<Perfil_Usuario />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
};
