import {Container,Frame,Icon,Molde,Img,Input,Frame2} from "./styled";
import {RiShieldCrossFill} from 'react-icons/ri';
import UserPerfil from "../../assets/UserPerfil.jpg";
import { useState } from "react";
import ModalCriarPubli from "../modal/modalCriarPubli/modalCriarPubli";
import  { createGlobalStyle } from 'styled-components';
const PublicationsTab = () => {
    const[openModal,setOpenModal]= useState(false)
    
    const GlobalStyle = createGlobalStyle`
    body {
      overflow: ${({ modalOpen }) => (modalOpen ? 'hidden' : 'auto')};
    }
  `;
    return (
        <Container>
            <Frame>
                <Img src={UserPerfil} alt="imagemPerfil" />
                <Input type="text" readOnly/>
                <Icon onClick={()=> setOpenModal(true)}>
                    <RiShieldCrossFill/>
                </Icon>
            </Frame>
            <ModalCriarPubli isOpen={openModal} setModalOpen = {()=> setOpenModal(!openModal)}/>
            <Frame2>
                <h1>Camapnhas e rpg</h1> 
            </Frame2>
            <GlobalStyle modalOpen={openModal} /> 
        </Container>
    );
  }
  
  export default PublicationsTab;