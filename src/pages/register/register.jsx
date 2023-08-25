import RegisterForm from "../../components/registerForm/registerForm";
import SideLogo from "../../components/sideLogo/sideLogo";
import { Box, Button, Container, Form, Input, Link, Title } from "./styled";

const Login = () => {
    return(
        <Container>
           <SideLogo />
           <RegisterForm />
        </Container>
    )
}

export default Login;