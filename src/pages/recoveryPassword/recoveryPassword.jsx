import RecoveryForm from "../../components/recoveryForm/recoveryForm";
import SideLogo from "../../components/sideLogo/sideLogo";
import {Container} from "./styled";

const ForgotPassword = () => {
    return(
        <Container>
           <SideLogo />
           <RecoveryForm />
        </Container>
    )
}

export default ForgotPassword;