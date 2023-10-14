import styled from "styled-components";


export const Container = styled.div`
  width: 84.2vw;
  display: flex;
  background-color: #2C0445;
  align-items: center;
  flex-direction: row;
  height: 8vh;
  justify-content: center;
`;
export const Caixa = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #070810;
`;

export const Button = styled.button`
  background: none;
  color: ${({ selected }) => (selected ? '#AB5F91' : '#D5B5ED')};
  text-decoration: ${({ selected }) => (selected ? 'underline' : 'none')};
  text-decoration-thickness: 3.5px; // Define a espessura do sublinhado
  text-underline-offset: 15px; // Define a distância do texto para baixo
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  padding: 17px;
  margin-left: 28px;
  margin-right: 30px;
  letter-spacing: 1px;
  transition: border 80ms ease-in, text-decoration 80ms ease-in;
  cursor: pointer;

  &:hover {
    background-color: rgba(19, 4, 28, 0.59);
    border-radius: 10px;
  }
  
 
`;
