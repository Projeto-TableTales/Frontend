import React from "react";
import { Banner, PhotoPerfil, InfoUser } from "./styled";

function Perfil() {
  return (
    <div>
      <Banner></Banner>
      <PhotoPerfil></PhotoPerfil>
      <InfoUser>
        <h1>Nome de Usuário</h1>
        <p>Status Atual: </p>
        <p>Nível de Experiência:</p>
      </InfoUser>
    </div>
  );
}

export default Perfil;
