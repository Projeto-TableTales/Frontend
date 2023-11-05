import React, { useEffect, useState } from 'react';
import UserFrame from "../../components/userFrame/userFrame";
import NavBar from "../../components/navBar/homeBar/navBar";
import { Container} from './styled';
import cover from '../../assets/UserCover.jpg';
import NavBarPerfil from "../../components/navBar/navBarPerfil/navBarPerfil"
import { useProtectedPage } from '../../hooks/useProtected';

const Perfil = () => {
  const [coverImage, setCoverImage] = useState(cover);
  const [userId, setUserId] = useState("");
  useProtectedPage();
  const handleCoverImageChange = (newImage) => {
    setCoverImage(newImage);
  };
  useEffect(()=> {
    getUserId()
  }  , [])

  const getUserId = () => {
    const id = window.localStorage.getItem("id");
    setUserId(id);
  }


  return (
    <div>
      <NavBar />
      <Container>
        <UserFrame coverImage={coverImage} onCoverImageChange={handleCoverImageChange} onEditCoverClick={handleCoverImageChange} id={userId} /> 
      </Container>
      <NavBarPerfil/>
    </div>
    

 );
};

export default Perfil;