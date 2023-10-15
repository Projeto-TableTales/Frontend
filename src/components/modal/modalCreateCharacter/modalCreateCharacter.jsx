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
const ModalCreateCharacter = ({ isOpen, setModalOpen }) => {
  if (isOpen) {
    return (
      <ScreenBackground>
        <ModalFrame>
          <Titulo>CRIAR PERSONAGEM</Titulo>
          <Divider className="LinhaDivisoria"></Divider>
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
                id="Nome do personagem"
                maxLength={30}
              />
              <StatusCharacter
                type="text"
                placeholder="Escreva o status do personagem"
                id="Status do personagem"
                maxLength={30}
              />
              <SystemCharacter
                type="text"
                placeholder="Escreva o sistema do personagem"
                id="Sistema do personagem"
                maxLength={30}
              />
            </Editaveis>
          </ImageRow>
          <SaveButton type="submit">SALVAR</SaveButton>
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
