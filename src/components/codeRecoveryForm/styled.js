import styled from "styled-components";
export const Container = styled.div`
    height: 60vh;
    width: 612px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 30px ;
    background-color: #2C0445;
`;
export const Title = styled.h1`
  color: #d2c5c5;
  background-color: #643a6f;
  width: 240px;
  border-radius: 24px;
  text-align: center;
  font-size: 24px;
  padding: 5px;
 
`;
export const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 2.5px;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem; 
`;

export const Input = styled.input` 
    border: none;
    padding: 10px 15px;
    width : 440px;
    outline: none;
    border: none;
    background-color: #FFFFFF;
    border-radius: 2.5px;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    
`;

export const Button = styled.button`
  border-radius: 20px;
  margin-top: 10px; 
  border: 1px solid #643a6f;
  background-color: #643a6f;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
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
export const Success = styled.span`
  color: green;
`;

export const Error = styled.span`
  color: red;
`;