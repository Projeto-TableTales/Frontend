import styled from "styled-components";

export const ScreenBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(20, 11, 29, 0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalFrame = styled.div`
  position: absolute;
  width: 60vw;
  height: 40vh;
  top: 20%;
  left: 20%;
  border-radius: 20px;
  background-color: #090210;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Button = styled.button`
  position: absolute;
  top: 1.5%;
  left: 94%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #ab5f91;
  border: 2px solid black;
  border-radius: 50%;
  width: 4vh;
  height: 4vh;
  transition: color 0.3s, background-color 0.3s, border-color 0.3s;
  svg {
    font-size: 28px;
  }
  &:hover {
    color: pink;
    background-color: black;
    border-color: black;
  }
`;

// Essa parte diz respeito a parte do titulo Criar Publicação

export const Titulo = styled.p`
  color: #8a7d98;
  font-size: 15px;
  position: absolute;
  top: 1%;
`;
export const Divider = styled.div`
  width: 100%;
  height: 2px;
  top: 13%;
  position: absolute;
  background-color: #8a7d98;
`;
// Inicio dos componentes editaveis:

export const ImageRow = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 120px;
  height: 130px;
  border: 2px solid #fff; /* Borda branca de 2px */
  border-radius: 20px; /* Borda arredondada para criar um círculo */
  overflow: hidden; /* Esconde qualquer conteúdo que saia do contêiner */
  margin-right: 20px;
  
`;

export const Imagem = styled.img`
  width: 100%; /* Garante que a imagem preencha o contêiner */
  height: 100%;
  object-fit: cover; /* Mantém a proporção da imagem e corta o excesso */
`;

export const EditImage = styled.div`
  flex-direction: column;
  align-items: start;
  display: flex;
`;

export const Editaveis = styled.div`
  width: 100%;
  top: 32%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const NameCharacter = styled.input`
  width: 40vw;
  height: 5vh;
  border: 2px solid #8a7d98;
  background-color: #090210;
  color: white;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 2%;
  ::placeholder {
    color: white;
  }
`;
export const StatusCharacter = styled.input`
  width: 40vw;
  height: 5vh;
  border: 2px solid #8a7d98;
  background-color: #090210;
  color: white;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 2%;
  ::placeholder {
    color: white;
  }
`;
export const SystemCharacter = styled.input`
  width: 40vw;
  height: 5vh;
  border: 2px solid #8a7d98;
  background-color: #090210;
  color: white;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 2%;
  ::placeholder {
    color: white;
  }
`;

export const SaveButton = styled.button`
  border-radius: 20px;
  border: 1px solid #643a6f;
  background-color: #643a6f;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  margin-left: auto;
  margin-right: 50px;
  margin-top: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;
