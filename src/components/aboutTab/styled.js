import styled from "styled-components";

export const Container = styled.div`
  width: 84vw;
  height:200vh;
  display: flex;
  justify-content: center; 
  align-items: top;
  background-color: rgba(224, 182, 251, 0.42);
  
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  margin-top:5%;
  justify-content: top; 
  align-items:top;
  flex-direction:column;
`;
// DESCRIÇÃOOOO
export const Description = styled.div`
  width: 100%;
  height:10%;
  background-color:#1E1429;
  display: flex;
  justify-content: center; 
  align-items:left;
  flex-direction:column;
`;
export const InputDescription = styled.input`
  width: 97.5%;
  height:60%;
  margin-top:1%;
  margin-left:1%;
  border:none; 
  background-color:#1E1429;
  display: flex;
  justify-content: center; 
  align-items:center;
`;
export const Titulo = styled.p`
  color:white;
  margin-block:0;
  margin-left:2%;
  font-size: 14px;
`;

// PAÍS

export const Country = styled.div`
  width: 100%;
  height:3%;
  margin-top:1.5%;
  background-color:#1E1429;
  display: flex;
  justify-content: left; 
  align-items:center;
  flex-direction:row;
`;

export const Input = styled.input`
  width: 93%;
  height:60%;
  border:none;  
  margin-left:1%;
  background-color:#1E1429;
  display: flex;
  justify-content: center; 
  align-items:center;
`;
// PREFERENCIAS

export const Preferencias = styled.div`
  width: 100%;
  height:14%;
  margin-top:1.5%;
  background-color:#1E1429;
  display: flex;
  justify-content: center; 
  align-items:center;
  flex-direction:column;
`;
export const Boxx = styled.div`
  width: 96%;
  height:15%;
  margin-top:0.8%;
  background-color:#3C2754;
  display: flex;
  justify-content: left; 
  align-items:center;
  flex-direction:row;
`;
export const Input2 = styled.input`
  width: 93%;
  height:60%;
  border:none;  
  margin-left:1%;
  background-color:#3C2754;
  display: flex;
  justify-content: center; 
  align-items:center;
`;