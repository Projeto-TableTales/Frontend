import {Bar, Img,List,Link,Container, SubListHigh,} from "../apresentBar/styled";
import Icon from "../../../assets/user_Icon.png"
import Logo_Home from "../../../assets/logo_2.png"
import { useNavigate } from "react-router-dom/dist";
import { ButtonNav } from "./styled";

const NavBar = () => {

    const handleClick = () => {
        window.localStorage.clear();
    }
    return (
         <Bar>
             <List>
                <Container>
                    <Img src={Logo_Home} alt="TableTales" />
                </Container> 
                <SubListHigh>
                    <Link to="/Home" > Home</Link>
                    <Link to="/forum" exact>Forum</Link>
                    <Link to="/perfil">
                        <img src={Icon} alt="User" />
                    </Link>
                    <Link to="/"><ButtonNav onClick={() => handleClick()}>Sair</ButtonNav></Link>
                </SubListHigh>
            </List>
         </Bar>

    )
}
export default NavBar;