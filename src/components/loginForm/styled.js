import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
export const Container = styled.div`
    height: 80vh;
    width: 612px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0 30px 30px 0;
    background-color: #D9D9D9;
`;
export const Title = styled.h1`
    color: #D2C5C5;
    background-color: #643A6F;
    width: 184px;
    border-radius: 11.6px;
    text-align: center;
`;
export const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:1.5rem;
`;
export const ErrorMessage = styled.form`
   color: red;
`;

export const Input = styled.input` 
    width : 240px;
    padding: 15px;
    outline: none;
    border: none;
    background-color: #FFFFFF;
    border-radius: 2.5px;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    
`;

export const Link = styled(RouterLink)`
    color: #290532 !important;
    align-self: flex-end;
    align-self: center;
`;

export const Button = styled.button`
    color: #D2C5C5;
    background-color: #643A6F;
    width: 141px;
    padding: 10px;
    font-size: 17px;
    font-weight: bold;
    border-radius: 11.6px;
    cursor: pointer;
    border: none;
    outline: none;
    &:hover{
        background-color: #2C0445;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
`;