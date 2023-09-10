import {Bar, Img,Link,Container,Button,SubListHigh, List, ImgText} from "./styled";
import Logo_Home from "../../../assets/Logo_Home.png"
import Logo_Text from "../../../assets/tabletale_tema.png"
const navBar = () => {
    return (
        <Bar>
            <List>
                    <Container>
                        <Img src={Logo_Home} alt="TableTales" />
                        <ImgText src={Logo_Text} alt="TableTales" />
                    </Container>
              
                <SubListHigh>
                    <Link to="/Sobre" exact>
                    Sobre Nós
                    </Link>
                    <Button>
                     <Link to="/Login" exact>
                        LOGIN
                     </Link>
                    </Button>
                </SubListHigh>
            </List>
            
        </Bar>
    );
}
export default navBar;