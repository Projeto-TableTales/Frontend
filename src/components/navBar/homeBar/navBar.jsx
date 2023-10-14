import {Logo,NavbarContainer, Icons, Search,Img,Bar,Span,Frame,Icon} from "../homeBar/styled"
import Logo_Home from "../../../assets/logo_2.png"
import { IoLogOutOutline } from 'react-icons/io5'
import {HiMiniHome} from 'react-icons/hi2'
import {GiSwordsEmblem} from 'react-icons/gi'
import {MdForum} from 'react-icons/md'
import {IoMdNotifications} from 'react-icons/io'
import {FaUserAlt} from 'react-icons/fa'
import {BiSearchAlt2} from 'react-icons/bi'
import { Link, useNavigate } from "react-router-dom/dist";
import { useState } from "react"
import ModalPerfilMenu from "../../modal/modalPerfilMenu/modalPerfilMenu";


const NavBar = () => {

    const[openModal,setOpenModal]= useState(false)
    
    return (
    <NavbarContainer>
    <Logo>
        <Img src={Logo_Home} alt="TableTales" />
    </Logo>
    <Search>
        <Bar type="text" placeholder="Pesquisar..." /> 
        <Icon><BiSearchAlt2/></Icon>
    </Search>   
    <Icons>
        <Frame><Link to="/home"><HiMiniHome/></Link></Frame>
        <Frame><Link to="/campanhas"><GiSwordsEmblem/></Link></Frame>
        <Frame><Link to="/forum"><MdForum/></Link></Frame>
        <Frame><Link to="/notificação"><IoMdNotifications/></Link></Frame>
        <Frame onClick={() => setOpenModal(true)}><Span><FaUserAlt/></Span></Frame>
    </Icons>
    <ModalPerfilMenu isOpen={openModal} setModalOpen = {()=> setOpenModal(!openModal)}/>
  </NavbarContainer>
    )
}
export default NavBar;