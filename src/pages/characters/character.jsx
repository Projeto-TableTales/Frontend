import {
  Container,
  Input,
  BoxContainer,
  ImageContainer,
  Imagem,
  ImageRow,
  Title,
  InfoColumn,
  InfoRow,
  InputDescription,
  BoxContainerHistory,
  BoxContainerInputHistory,
  InputHistory,
  EditImage,
  SaveButton
} from "./styled";
import NavBar from "../../components/navBar/homeBar/navBar";
import bruxo from "./../../assets/bruxo.png";

const Character = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <BoxContainer>
          <ImageRow>
            <EditImage>

            <ImageContainer>
              <Imagem src={bruxo} alt="Bruxo" />
            </ImageContainer>
            <SaveButton type="submit">Editar</SaveButton>
            </EditImage>
            <InfoColumn>
              <InfoRow>
                <Title>NOME:</Title>
                <Input
                  type="text"
                  placeholder="Escreva o nome do personagem"
                  id="Nome do personagem"
                  maxLength={30}
                />
                <Title>SISTEMA DO RPG:</Title>
                <Input
                  type="text"
                  placeholder="Escreva o sistema do personagem"
                  id="Sistema do personagem"
                  maxLength={30}
                />
              </InfoRow>
              <InfoRow>
                <Title>IDADE:</Title>
                <Input
                  type="text"
                  placeholder="Escreva a idade do personagem"
                  id="Idade do personagem"
                />
                <Title>STATUS:</Title>
                <Input
                  type="text"
                  placeholder="Escreva o status do personagem"
                  id="Status do personagem"
                  maxLength={30}
                />
              </InfoRow>
              <InfoRow>
                <Title>DESCRIÇÂO:</Title>
                <InputDescription
                  type="text"
                  placeholder="Escreva a descrição do personagem"
                  id="Descrição do personagem"
                  rows="4"
                />
              </InfoRow>
              <InfoRow>
                <Title>PERSONALIDADE:</Title>
                <InputDescription
                  type="text"
                  placeholder="Escreva a personalidade do personagem"
                  id="Personalidade do personagem"
                  rows="4"
                />
              </InfoRow>
            </InfoColumn>
          </ImageRow>
        </BoxContainer>
        <BoxContainerHistory>
          <Title>HISTORIA:</Title>
        </BoxContainerHistory>
        <BoxContainerInputHistory>
          <InputHistory
            type="text"
            placeholder="Escreva a historia do personagem"
            id="Historia do personagem"
          />
        </BoxContainerInputHistory>
      </Container>
    </div>
  );
};

export default Character;
