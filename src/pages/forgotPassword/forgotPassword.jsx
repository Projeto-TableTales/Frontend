import ForgotPasswordForm from "../../components/forgotPasswordForm/forgotPasswordForm";
import SideLogo from "../../components/sideLogo/sideLogo";
import {Container} from "./styled";

const ForgotPassword = () => {
    return(
        <Container>
           <SideLogo />
           <ForgotPasswordForm />
        </Container>
    )
}

export default ForgotPassword;