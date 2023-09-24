import NavBarApresent from "../../components/navBar/apresentBar/navBarApresent"
import {Container,Img,Quadro,TextBox,Button,Paragraph,Title} from "./styled";
import Imagem_RPG from "../../assets/Imagem_rpg.png"
import { useNavigate } from "react-router-dom/dist";
import { useEffect } from "react";
const Apresentacao = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        token && navigate('/home')
      }, [])
    return(
        <Container>
            <NavBarApresent/>
            <Quadro>
                <TextBox>
                    <Title>Venha se juntar à nossa COMUNIDADE!</Title>
                    <Button onClick = {()=> navigate('/register')}> Crie uma conta gratuita</Button>
                    <Paragraph>
                        Crie personagens, crie mesas, compartilhe experiências, encontre jogadores e personalize sua história de sua campanha – Venha criar laços e expandir esse universo maravilhoso de fantasias.
                    </Paragraph>
                </TextBox>
                <Img src={Imagem_RPG} alt="RPG" />
            </Quadro>
        </Container>
       

    )
}
export default Apresentacao;