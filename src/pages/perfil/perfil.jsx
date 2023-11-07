import React, { useState } from 'react';
import UserFrame from "../../components/userFrame/userFrame";
import NavBar from "../../components/navBar/homeBar/navBar";
import { Container} from './styled';
import cover from '../../assets/UserCover.jpg';
import NavBarPerfil from "../../components/navBar/navBarPerfil/navBarPerfil"

const Perfil = () => {
  const [coverImage, setCoverImage] = useState(cover);

  const handleCoverImageChange = (newImage) => {
    setCoverImage(newImage);
  };

  return (
    <div>
      <NavBar />
      <Container>
        <UserFrame coverImage={coverImage} onCoverImageChange={handleCoverImageChange} onEditCoverClick={handleCoverImageChange} /> 
      </Container>
      <NavBarPerfil/>
    </div>
    

 );
};

export default Perfil;