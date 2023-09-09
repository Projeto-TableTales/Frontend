
import styled from "styled-components";

export const Container = styled.div`
    background-color: #070810;
    //background-color: #0D0015;
    min-height:100vh
`;
export const Quadro = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    min-height: 100vh; 
    position: relative;
`;
export const Img = styled.img`
    width: 800px;
    display:block;
    align-items:center;
    justify-content:center;
`;
export const TextBox = styled.div`
    padding: 100px;
    color:#FFFF
`;
export const Paragraph = styled.p`
    font-size: 20px;
`;
export const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 10px;
`;
export const Button = styled.button`
    color: #D2C5C5;
    background-color: #643A6F;
    width: 300px;
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

