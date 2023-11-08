import styled from "styled-components";

export const Container = styled.div`
  background-color: #070810;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza verticalmente */
`;

export const BoxContainer = styled.div`
  width: 82vw;
  min-height: 100vh; /* Defina a altura mínima desejada */
  overflow: auto;
  background-color: rgba(224, 182, 251, 0.42);
  padding: 20px;
  margin-top: 100px;
  
`;

export const Publi = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
margin: 5vh 0;
width: 90%;
min-height: 45vh;
`;