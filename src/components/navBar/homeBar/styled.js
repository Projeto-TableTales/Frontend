import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Bar = styled.nav`
    display:flex;
    background-color: #2C0445;
    align-items: center;
    justify-content:space-between;
    flex-direction: row;
    height: 15vh;
    padding: 0.8em;  
`;
export const Span = styled.span`
    color: #D2C5C5;
    background-color: #643A6F;
    padding: 10px;
    margin-left: 50px;
    font-size: 20px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    border: none;
    outline: none;
    &:hover{
        background-color: #070810;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
`;

export const Link = styled(RouterLink)`
    color: #D2C5C5 !important;
    align-self: flex-end;
    text-decoration:none;
    &:hover{
        background-color: #2C0445;
    }
`;
export const Img = styled.img`
  height: 100%;
  align-items: center;
  justify-content:center;
`;

export const Container = styled.div`
    height: 15vh;
    width: 550px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Quadro = styled.div`
    height: 35px;
    width: 340px;
    display: flex;
    align-items: center;
`;




