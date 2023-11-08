import { EditButton, CoverImage, CoverContainer, ImagemCoverContainer, ProfileImage, UserName } from "./styled";
import React, { useEffect, useState } from 'react';
import user from '../../assets/UserPerfil.jpg';
import api from "../../api/api";

const UserFrame = ({ coverImage, onEditCoverClick }) => {

  const [usuario, setUsuario] = useState("");
  const [perfilImg, setPerfilImg] = useState("");
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    api.get(`/perfil`)
      .then(response => {
        const usuario = response.data;
        setUsuario(usuario);
        getPerfilImg(usuario.id);
      })
      .catch((error) => {
        setUsuario("Deu Ruim");
        console.error('Erro ao obter os dados do usuário:', error.data);
      });
  }

  const getPerfilImg = (id) => {
    api.get(`/perfil/imgPerfil/${id}`)
      .then(response => {
        const img = response.data.caminho;
        setPerfilImg(img);
      })
      .catch((error) => {
        setUsuario("Deu Ruim");
        console.error('Erro ao obter os dados do usuário:', error.data);
      });
  }
  const handleImageChange = (event) => {
    const newCoverImage = URL.createObjectURL(event.target.files[0]);
    onEditCoverClick(newCoverImage);
    localStorage.setItem('coverImage', newCoverImage);
    // Enviar a imagem para o servidor
    const formData = new FormData();
    formData.append('file', event.target.files[0]);

    api.post('/imagens/upImagemPerfil/{idUser}', formData)
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
            {/* <ProfileImage src={perfilImg ? perfilImg : user} alt="Imagem do perfil" /> */}
            <ProfileImage src={user} alt="Imagem do perfil" />

            <EditButton onClick={() => document.querySelector('input[type="file"]').click()}>
              Editar Foto de Capa
            </EditButton>
            <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
          </ImagemCoverContainer>
          <UserName>{usuario.nome}</UserName>
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