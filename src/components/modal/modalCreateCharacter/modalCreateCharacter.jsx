import React, { useState } from "react";
import {
  ScreenBackground,
  ModalFrame,
  Button,
  Titulo,
  NameCharacter,
  SaveButton,
  Divider,
  Editaveis,
  StatusCharacter,
  SystemCharacter,
  ImageContainer,
  ImageRow,
  EditImage,
  Imagem,
} from "./styled";
import { RxCross2 } from "react-icons/rx";
import bruxo from "./../../../assets/bruxo.png";
import api from "../../../api/api";

const ModalCreateCharacter = ({ isOpen, setModalOpen }) => {
  const [characterData, setCharacterData] = useState([]);
  const [nameCharacter, setNameCharacter] = useState("");
  const [statusCharacter, setStatusCharacter] = useState("");
  const [systemCharacter, setSystemCharacter] = useState("");

  const handleInputChange = (event, setStateFunction) => {
    const novoValor = event.target.value;
    setStateFunction(novoValor);
  };

  const requestApi = () => {
    const dataSend = {
      nome: nameCharacter,
      status: statusCharacter,
      sistema: systemCharacter,
    };

    api
      .post("/personagem", dataSend)
      .then((response) => {
        setCharacterData(response.data);
      })
      .catch((error) => {
        console.error(error);
        // Adicione tratamento de erro aqui
      });
  };

  if (isOpen) {
    return (
      <ScreenBackground>
        <ModalFrame>
          <Titulo>CRIAR PERSONAGEM</Titulo>
          <Divider className="LinhaDivisoria" />
          <ImageRow>
            <EditImage>
              <ImageContainer>
                <Imagem src={bruxo} alt="Bruxo" />
              </ImageContainer>
              <SaveButton type="submit">Editar</SaveButton>
            </EditImage>
            <Editaveis>
              <NameCharacter
                type="text"
                placeholder="Escreva o nome do personagem"
                onChange={(e) => handleInputChange(e, setNameCharacter)}
                value={nameCharacter}
                id="Nome do personagem"
                maxLength={30}
              />
              <StatusCharacter
                type="text"
                placeholder="Escreva o status do personagem"
                id="Status do personagem"
                onChange={(e) => handleInputChange(e, setStatusCharacter)}
                value={statusCharacter}
                maxLength={30}
              />
              <SystemCharacter
                type="text"
                placeholder="Escreva o sistema do personagem"
                onChange={(e) => handleInputChange(e, setSystemCharacter)}
                value={systemCharacter}
                id="Sistema do personagem"
              />
            </Editaveis>
          </ImageRow>
          <SaveButton type="submit" onClick={requestApi}>
            SALVAR
          </SaveButton>
          <Button onClick={setModalOpen}>
            <RxCross2 />
          </Button>
        </ModalFrame>
      </ScreenBackground>
    );
  }
  return null;
};

export default ModalCreateCharacter;
