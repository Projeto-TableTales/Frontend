import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

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
export const Box = styled.div`
    width : 439px;
    display:flex;
    flex-direction: column;
    padding: 1rem 3rem 2rem 3rem;
    background-color:#85608E;
    border-radius: 20px;
    color: #290532 !important;
`;

export const Input = styled.input` 
    padding: 8px;
    outline: none;
    border: none;
    background-color: #D9D9D9;
    border-radius: 11.6px;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

export const CustomRouterLink = styled(RouterLink)`
    color: #290532 !important;
    align-self: flex-end;
`;

export const Button = styled.button`
    color: #D2C5C5;
    background-color: #643A6F;
    width: 141px;
    padding: 5px;
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