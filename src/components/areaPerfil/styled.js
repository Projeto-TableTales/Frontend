import styled from "styled-components";

export const Banner = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a484a7;
  position: relative;
  z-index: 0; /* O Banner deve estar em um nível de sobreposição inferior */
`;

export const PhotoPerfil = styled.div`
  position: absolute;
  top: 48%;
  left: 2%;
  transform: translate(0%, -100%);
  width: 250px;
  height: 250px;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1; /* O PhotoPerfil deve estar em um nível de sobreposição superior */
`;

export const InfoUser = styled.div`
margin-left: 340px;
`;