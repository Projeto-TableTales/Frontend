import styled from "styled-components";

export const Container = styled.div`
  width: 82vw;
  height: 73vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  background-color: rgba(224, 182, 251, 0.42);
  padding: 20px;
`;

export const Box = styled.div`
  flex: 1;
  background-color: #1e1429;
  color: white;
  border-radius: 20px;
  padding: 20px;
  width: 500px;
  height: 600px;
  align-items: center;
  margin: 20px;
  overflow: auto; 
`;
export const Title = styled.div`
  background-color: #593b6b;
  color: white;
  border-radius: 20px;
  padding: 20px;
  width: 150px;
  height: 20px;
  align-items: center;
  justify-content: start;
  display: flex;
`;

export const BoxCampaign = styled.div`
  background-color: #05000a;
  color: white;
  border-radius: 20px;
  padding: 20px;
  width: 250px;
  height: 60px;
  flex-direction: row;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Imagem = styled.img`
  width: 40px; /* Garante que a imagem preencha o contêiner */
  height: 40px;
  object-fit: cover; /* Mantém a proporção da imagem e corta o excesso */
  margin-right: 20px;
`;
