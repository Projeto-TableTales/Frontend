import { Container, Img } from "./styled";
import logo from "../../assets/logo_2.png"


const SideLogo = () => {
    return(
        <Container>
            <Img src={logo} alt="Logo"/>
        </Container>
    )
}

export default SideLogo;