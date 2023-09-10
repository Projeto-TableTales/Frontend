import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
export const Container = styled.div`
  height: 80vh;
  width: 612px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 30px 30px 0;
  background-color: #d9d9d9;
`;
export const Title = styled.h1`
  color: #d2c5c5;
  background-color: #643a6f;
  width: 184px;
  border-radius: 11.6px;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;

export const ErrorMessage = styled.form`
  color: red;
`;

export const Input = styled.input`
  border: none;
  padding: 10px 15px;
  width: 240px;
  outline: none;
  border: none;
  background-color: #ffffff;
  border-radius: 2.5px;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
`;
export const EmailInput = styled(Input)`
  width: 540px;
  padding: 11px;
`;

export const Link = styled(RouterLink)`
  color: #290532 !important;
  align-self: flex-end;
`;

export const Button = styled.button`
  color: #d2c5c5;
  background-color: #643a6f;
  width: 141px;
  padding: 10px;
  font-size: 17px;
  font-weight: bold;
  border-radius: 11.6px;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background-color: #2c0445;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
