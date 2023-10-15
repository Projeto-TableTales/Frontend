import {
  Container,
  ImageRow,
  BoxPersonagem,
  Imagem,
  ImageContainer,
  TextInfo,
  Icon,
  Title,
} from "./styled";
import bruxo from "./../../assets/bruxo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiAddLine  } from "react-icons/ri";
import ModalCreateCharacter from "../modal/modalCreateCharacter/modalCreateCharacter";

const CharacterTab = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const handleContainerClick = () => {
    navigate("/perfil/character");
  };
  return (
    <Container>
      <Title>
        <h1>TODOS OS PERSONAGENS:</h1>
        <Icon onClick={() => setOpenModal(true)}>
          <RiAddLine  />
        </Icon>
        <h1>ADICIONAR</h1>
      </Title>
      <ModalCreateCharacter
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
      />

      <button
        onClick={handleContainerClick}
        style={{
          backgroundColor: "transparent",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <BoxPersonagem>
          <ImageRow>
            <ImageContainer>
              <Imagem src={bruxo} alt="Bruxo" />
            </ImageContainer>
            <TextInfo>
              <p>Nome: Kira Fiore</p>
              <p>Status: Em Campanha</p>
              <p>Sistema: Tormenta</p>
            </TextInfo>
          </ImageRow>
        </BoxPersonagem>
      </button>
    </Container>
  );
};

export default CharacterTab;
