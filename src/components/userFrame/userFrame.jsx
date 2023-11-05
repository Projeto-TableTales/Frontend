import { EditButton, CoverImage, CoverContainer, ImagemCoverContainer, ProfileImage, UserName } from "./styled";
import React, { useEffect, useState } from 'react';
// import cover from '../../assets/UserCover.jpg';
import user from '../../assets/UserPerfil.jpg';
import axios from 'axios';
import api from "../../api/api";

const UserFrame = ({ coverImage, onEditCoverClick, id }) => {
  
  const [username, setUsername] = useState("");


  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    const header = {

    }

    api.get(`/perfil/name/${id}`)
    .then( response => {
      const nome = response.data.nome;
      console.log(nome);
      setUsername(nome);
    })
    .catch((error) => {
      console.error('Erro ao obter os dados do usuário:', error);
    });
  }
  const [isEditing, setIsEditing] = useState(false);

  const handleImageChange = (event) => {
    const newCoverImage = URL.createObjectURL(event.target.files[0]);
    onEditCoverClick(newCoverImage);
    localStorage.setItem('coverImage', newCoverImage);
    // Enviar a imagem para o servidor
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
  
    axios.post('/imagens/inserir', formData)
      .then((response) => {
        // Tratar a resposta do servidor, se necessário
      })
      .catch((error) => {
        console.error('Erro ao enviar a imagem:', error);
      });
  
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
          <UserName>{username}</UserName>
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