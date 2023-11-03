import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  ImageRow,
  BoxPersonagem,
  Imagem,
  ImageContainer,
  TextInfo,
  Icon,
  Title,
  GridContainer,
  // Nova importação
} from "./styled";
import bruxo from "./../../assets/bruxo.png";
import { useNavigate } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import ModalCreateCharacter from "../modal/modalCreateCharacter/modalCreateCharacter";

const CharacterTab = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const [characterData, setCharacterData] = useState([]);
  const [error, setError] = useState(null);

  const handleContainerClick = (characterId) => {
    // Navegar para a página do perfil do personagem com base no ID do personagem
    navigate(`/perfil/character/${characterId}`);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Verifique se o token está disponível
    if (token) {
      // Configure o cabeçalho de autorização
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .get("http://localhost:8080/personagem", config)
        .then((response) => {
          setCharacterData(response.data); // Supondo que os dados estejam em um array
        })
        .catch((err) => {
          setError(err); // Captura o erro
        });
    }
  }, []);

  return (
    <Container>
      <Title>
        <h1>TODOS OS PERSONAGENS:</h1>
        <Icon onClick={() => setOpenModal(true)}>
          <RiAddLine />
        </Icon>
        <h1>ADICIONAR</h1>
      </Title>
      <ModalCreateCharacter
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
      />

      {error ? (
        <h2>Ocorreu um erro ao carregar os personagens, tente novamente...</h2>
      ) : (
        <GridContainer>
          {characterData.map((character, index) => (
            <button
              onClick={() => handleContainerClick(character.id)}
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
              key={character.id}
            >
              <BoxPersonagem>
                <ImageRow>
                  <ImageContainer>
                    <Imagem src={bruxo} alt="Bruxo" />
                  </ImageContainer>
                  <TextInfo>
                    <p>Nome: {character.nome}</p>
                    <p>Status: {character.status}</p>
                    <p>Sistema: {character.sistemaDoRPG}</p>
                  </TextInfo>
                </ImageRow>
              </BoxPersonagem>
            </button>
          ))}
        </GridContainer>
      )}
    </Container>
  );
};

export default CharacterTab;
