import {Bar, Img,Link,Container,Button,SubListHigh, List, ImgText} from "./styled";
import Logo_Home from "../../../assets/Logo_Home.png"
import Logo_Text from "../../../assets/tabletale_tema.png"
import { useNavigate } from "react-router-dom/dist";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <Bar>
            <List>
                    <Container>
                        <Img src={Logo_Home} alt="TableTales" />
                        <ImgText src={Logo_Text} alt="TableTales" />
                    </Container>
              
                <SubListHigh>
                    <Link to="/info">
                    Sobre Nós
                    </Link>
                    <Button onClick = {() => navigate("/login")}>
                        LOGIN
                    </Button>
                </SubListHigh>
            </List>
            
        </Bar>
    );
}
export default NavBar;