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
  border-radius: 24px;
  text-align: center;
  font-size: 24px;
  padding: 10px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 14px 15px;
  width: 270px;
`;

export const CustomRouterLink = styled(RouterLink)`
  color: #290532 !important;
  align-self: flex-end;
`;

export const Button = styled.button`
  border-radius: 20px;
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
