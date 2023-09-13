import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Login from "../pages/login/login"
import Register from "../pages/register/register"
import ForgotPassword from "../pages/forgotPassword/forgotPassword"
import Home from "../pages/home/home"
import Apresentacao from "../pages/apresentacao/apresentacao"
import Perfil from "../pages/perfil/perfil"
import App from "../pages/tela_esqueceu_senha/App"
import App_2 from "../pages/tela_perfil_usuario/App_2"

export const AppRouter = () =>{
    return (
        <Router>
            <Routes>
                <Route path = "/login" element ={<Login/>} />
                <Route path = "/register" element ={<Register/>} />
                <Route path = "/forgotPassword" element ={<ForgotPassword/>} />
                <Route path = "/home" element ={<Home/>} />
                <Route path = "/" exact element ={<Apresentacao/>} />
                <Route path = "/perfil" exact element ={<Perfil/>} />
		<Route path = "/tela_esqueceu_senha" exact element ={<App/>} />
		<Route path = "/tela_perfil_usuario" exact element ={<App_2/>} />
            </Routes>
        </Router>
    )

}