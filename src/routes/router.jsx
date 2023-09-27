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
import Perfil from "../pages/perfil/Perfil_Usuario";
import Info from "../pages/info/info";
import CodePassword from "../pages/codePassword/codePassword";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Apresentacao />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/home" element={ <Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/info" element={<Info />} />
        <Route path="/codeRecovery" element={<CodePassword/>} />
      </Routes>
    </Router>
  );
};
