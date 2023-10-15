import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import ForgotPassword from "../pages/forgotPassword/forgotPassword";
import Home from "../pages/home/home";
import Apresentacao from "../pages/apresentacao/apresentacao";
import Perfil from "../pages/perfil/perfil";
import Info from "../pages/info/info";
import CodePassword from "../pages/codePassword/codePassword";
import Publicacoes from "../components/publicationsTab/publicationsTab";
import Character from "../pages/characters/character"
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
        <Route path="/perfil/publicacoes" component={<Publicacoes/>} />
        <Route path="/perfil/character" element={<Character />} />
          {/*
           <Route path="/perfil/sobre-voce" component={SobreVoce} />
          <Route path="/perfil/personagens" component={Personagens} />
          <Route path="/perfil/campanhas" component={Campanhas} />
          <Route path="/perfil/amigos" component={Amigos} /> */}

      </Routes> 
    </Router>
  );
};
