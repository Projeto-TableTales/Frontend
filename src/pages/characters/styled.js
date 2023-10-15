import styled from 'styled-components';

export const Container = styled.div`
    background-color: #070810;
    width: 100vw;
    height: 130vh;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 15vh;
    `;

export const Title = styled.p`
  color:white;
  margin-block:0;
  margin-left:2%;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 240px;
  padding: 15px;
  border: 0px;
  margin-left:1%;
  background-color:#1E1429;
  display: flex;
  justify-content: center; 
  align-items:center;
  color: white;
`;


export const ImageRow = styled.div`
  flex-direction: row;
  display: flex; 
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 230px;
  height: 250px;
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

export const InputDescription = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 15px;
  border: 0;
  margin-left: 1%;
  background-color: #1E1429;
  color: white;
  margin-top: 20px;
  text-align: left; /* Alinha o texto no início */
  padding-left: 30px; /* Adicione espaço entre o ícone e o texto */
  resize: none;
`;

export const BoxContainer = styled.div`
  width: 84vw;
  height: 55vh;
  display: flex;
  justify-content: start;
  align-items: flex-start; /* Corrigido para alinhar no topo à esquerda */
  background-color: rgba(224, 182, 251, 0.42);
  padding-left: 30px;
  padding-right: 30px;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Corrigido para alinhar no topo à esquerda */
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* Corrigido para alinhar no topo à esquerda */
  margin-top: 20px;
  width: 100%;
`;

export const BoxContainerHistory = styled.div`
  width: 84vw;
  height:65px;
  display: flex;
  justify-content: start;
  align-items: flex-start; /* Corrigido para alinhar no topo à esquerda */
  background-color: #2C0445;
  padding-left: 30px;
  padding-right: 30px;
`;

export const BoxContainerInputHistory = styled.div`
  width: 84vw;
  height: 60vh;
  display: flex;
  justify-content: start;
  align-items: flex-start; /* Corrigido para alinhar no topo à esquerda */
  background-color: rgba(224, 182, 251, 0.42);
  padding-left: 30px;
  padding-right: 30px;
`;

export const InputHistory = styled.textarea`
  width: 100%;
  height: 50vh;
  padding: 15px;
  border: 0;
  margin-left: 1%;
  background-color: #1E1429;
  color: white;
  margin-top: 20px;
  text-align: left; /* Alinha o texto no início */
  padding-left: 30px; /* Adicione espaço entre o ícone e o texto */
  resize: none;
`;

export const SaveButton = styled.button`
  border-radius: 20px;
  border: 0px solid #643a6f;
  background-color: #1E1429;
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

export const EditImage = styled.div`
  flex-direction: column;
  align-items: start;
  display: flex;
`;

