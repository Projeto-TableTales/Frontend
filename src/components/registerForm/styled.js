import styled from "styled-components";

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
    border-radius: 24px;
    text-align: center;
    font-size: 24px;
    padding: 10px;
`;
export const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:1.5rem;
`;


export const Input = styled.input` 
background-color: #eee;
border: none;
padding: 14px 15px;
width: 270px;

`;




export const Button = styled.button`
border-radius: 20px;
border: 1px solid #643A6F;
background-color: #643A6F;
color: #ffffff;
font-size: 12px;
font-weight: bold;
padding: 12px 45px;
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 80ms ease-in;
&:active{
    transform: scale(0.95);
}
&:focus {
    outline: none;
}
`;