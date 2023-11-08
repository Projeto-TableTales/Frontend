
import { Link,useNavigate } from "react-router-dom";
import {ScreenBackground,ModalFrame,Button,Divider} from "./styled";
import api from "../../../api/api";
import { useState } from "react";
import { useEffect } from "react";
const ModalPerfilMenu = ({isOpen,setModalOpen}) => {
    
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("");
  
  
    useEffect(() => {
      getUserInfo();
    }, []);
  
    const getUserInfo = () => {
      api.get(`/perfil`)
      .then( response => {
        const usuario = response.data;
        setUsuario(usuario);
      })
      .catch((error) => {
        setUsuario("Deu Ruim");
        console.error('Erro ao obter os dados do usuário:', error.data);
      });
    }
  

    const handleClick = () => {
        window.localStorage.clear();
        navigate("/");
     }
     
    if(isOpen){
        return (
            <ScreenBackground onClick={setModalOpen}>
                <ModalFrame>
                    <Link to="/perfil"> 
                        <Button>{usuario.nome}</Button>
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