
import { Link,useNavigate } from "react-router-dom";
import {ScreenBackground,ModalFrame,Button,Divider} from "./styled";
const ModalPerfilMenu = ({isOpen,setModalOpen}) => {
    
    const navigate = useNavigate();
    const handleClick = () => {
        window.localStorage.clear();
        navigate("/");
     }
     
    if(isOpen){
        return (
            <ScreenBackground onClick={setModalOpen}>
                <ModalFrame>
                    <Link to="/perfil"> 
                        <Button>UserName</Button>
                    </Link> 
                    <Divider className="LinhaDivisoria"></Divider>
                    <Button>Editar Perfil</Button>
                    <Button>Nova Publicação</Button>
                    <Button onClick={()=>handleClick()}>Lagout</Button>
                </ModalFrame>
            </ScreenBackground>
            
        );
    }
    return null;

}

export default  ModalPerfilMenu ;