import RegisterForm from "../../components/registerForm/registerForm";
import SideLogo from "../../components/sideLogo/sideLogo";
import{ Container}  from "./styled";

const Login = () => {
    return(
        <Container>
           <SideLogo />
           <RegisterForm />
        </Container>
    )
}

export default Login;