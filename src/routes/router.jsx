import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Login from "../pages/login/login"
import Register from "../pages/register/register"
import ForgotPassword from "../pages/forgotPassword/forgotPassword"
import Home from "../pages/home/home"
import Apresentacao from "../pages/apresentacao/apresentacao"
export const AppRouter = () =>{
    return (
        <Router>
            <Routes>
                <Route path = "/login" element ={<Login/>} />
                <Route path = "/register" element ={<Register/>} />
                <Route path = "/forgotPassword" element ={<ForgotPassword/>} />
                <Route path = "/home" element ={<Home/>} />
                <Route path = "/" exact element ={<Apresentacao/>} />
            </Routes>
        </Router>
    )

}