import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Bar = styled.nav`
    display:flex;
    background-color: #2C0445;
    align-items: center;
    flex-direction: row;
    padding: 0.8em;  
`;
export const Button = styled.button`
    color: #D2C5C5;
    background-color: #643A6F;
    width: 141px;
    padding: 10px;
    margin-left: 50px;
    font-size: 17px;
    font-weight: bold;
    border-radius: 11.6px;
    cursor: pointer;
    border: none;
    outline: none;
    &:hover{
        background-color: #070810;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
`;
export const List = styled.ul`
    display:flex;
    list-style: none;
    align-items: center;
    justify-content:flex-end;
`;
export const SubListHigh = styled.li`
    margin-left: auto;
    flex-direction: column;
    padding-left:600px;
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
  width: 30%;
  align-items: center;
  justify-content:center;
`;
export const ImgText = styled.img`
  width: 50%;
  padding-left:40px;
  align-items: center;
  justify-content:center;
`;
export const Container = styled.div`
    height: 15vh;
    width: 550px;
    display: flex;
    align-items: center;
`;

export const ImgHome = styled.img`
  width: 25%;
  align-items: center;
  justify-content:center;
`;



