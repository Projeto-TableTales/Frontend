import LoginForm from "../../components/loginForm/loginForm";
import SideLogo from "../../components/sideLogo/sideLogo";
import {Container} from "./styled";

const Login = () => {
    return(
        <Container>
           <SideLogo />
           <LoginForm />
        </Container>
    )
}

export default Login;