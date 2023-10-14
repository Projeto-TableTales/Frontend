import { EditButton, CoverImage, CoverContainer, ImagemCoverContainer, ProfileImage, UserName } from "./styled";
import React, { useEffect, useState } from 'react';
// import cover from '../../assets/UserCover.jpg';
import user from '../../assets/UserPerfil.jpg';
import axios from 'axios';

const UserFrame = ({ coverImage, onEditCoverClick }) => {
  const [userName, setUserName] = useState('Larissa b');

  useEffect(() => {
    axios.get('/perfil/name/{id}') // Use uma rota válida
      .then((response) => {
        setUserName(response.data);
      })
      .catch((error) => {
        console.error('Erro ao obter o nome do usuário:', error);
      });
  }, []);
  const [isEditing, setIsEditing] = useState(false);
  const handleImageChange = (event) => {
    const newCoverImage = URL.createObjectURL(event.target.files[0]);
    onEditCoverClick(newCoverImage);
    setIsEditing(false);
  };

  return (
    <CoverContainer>
      {!isEditing ? (
        <>
          <ImagemCoverContainer>
            <CoverImage src={coverImage} alt="Capa do usuário" />
            <ProfileImage src={user} alt="Imagem do perfil" />
            <EditButton onClick={() => document.querySelector('input[type="file"]').click()}>
              Editar Foto de Capa
            </EditButton>
            <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
          </ImagemCoverContainer>
          <UserName>{userName}</UserName>
        </>
      ) : (
        <> 
          {/* Adicionar a UI de edição de imagem de capa aqui se necessário */}
        </>
      )}
    </CoverContainer>
  );
}

export default UserFrame;