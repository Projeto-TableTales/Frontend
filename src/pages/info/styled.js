import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`;

export const Box = styled.div`

  background-color:#A484A7;
  display: flex;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 70px;
  max-width: 1100px;
  overflow: visible;
  padding: 60px 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr; /* Duas linhas de tamanho igual */
  grid-template-columns: 1fr 1fr; /* Duas colunas de tamanho igual */
  gap: 10px;
  margin-top: 25px;
`;

export const Column = styled.div`
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ImageRow = styled.div`
  flex-direction: row;
  display: flex; 
  align-items: center;
`;


