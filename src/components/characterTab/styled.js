import styled from "styled-components";

export const Container = styled.div`
  width: 82vw;
  height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: rgba(224, 182, 251, 0.42);
  padding: 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space;
  align-items: center;
  width: 100%;
`;

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
`;

export const Imagem = styled.img`
  width: 100%; /* Garante que a imagem preencha o contêiner */
  height: 100%;
  object-fit: cover; /* Mantém a proporção da imagem e corta o excesso */
`;

export const BoxPersonagem = styled.div`
  background-color: #1e1429;
  color: white;
  border-radius: 20px;
  padding: 20px;
  width: 400px;
  height: 150px;
  align-items: center;
`;

export const TextInfo = styled.div`
  flex-direction: column;
  display: flex;
  align-items: start;
  padding-left: 20px;
`;

export const Icon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  color: black;
  background-color: #ab5f91;
  border: 2px solid black;
  border-radius: 50%;
  width: 6vh;
  height: 6vh;
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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); /* Por padrão, você terá 1 coluna por linha */
  gap: 20px; /* Espaçamento entre os elementos */

  /* Ajuste o número de colunas por linha com base na largura da tela */
  @media (min-width: 768px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* 2 colunas por linha em telas maiores que 768px */
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* 3 colunas por linha em telas maiores que 1200px */
  }
`;
