import LoginForm from "../../components/loginForm/loginForm";
import SideLogo from "../../components/sideLogo/sideLogo";
import { Box, Button, Container, Form, Input, Link, Title } from "./styled";

const Login = () => {
    return(
        <Container>
           <SideLogo />
           <LoginForm />
        </Container>
    )
}

export default Login;