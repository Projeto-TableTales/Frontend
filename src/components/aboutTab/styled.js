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
  width: 94%;
  height:60%;
  margin: 1% 2vw;
  border:none; 
  background-color:#1E1429;
  display: flex;
  justify-content: center; 
  align-items:center;
  color: whitesmoke;
`;
export const Titulo = styled.span`
  color:white;
  margin-block:0;
  padding: 0 2vw;
  font-size: 14px;
  font-weight: bold;
`;
export const TituloSessao = styled(Titulo)`
  width: 100%;
  margin-left: 3vw;
  padding: 0 4vw;
  font-weight: bold;
  text-align: left;
`;

export const TituloItens = styled(Titulo)`
  width: 15%;
  text-align: left;
`;
// PAÍS

export const Country = styled.div`
  width: 100%;
  height:3%;
  margin-top:1.5%;
  background-color:#1E1429;
  display: flex;
  justify-content: space-between; 
  align-items:center;
  flex-direction:row;
`;

export const TituloCountry = styled(Titulo)`
  width: 10%;
  text-align: left;
`;

export const Input = styled.input`
  width: 90%;
  height:60%;
  border:none; 
  outline: none; 
  margin-left:1%;
  margin-right: 2vw;
  background-color:#1E1429;
  display: flex;
  justify-content: center; 
  align-items:center;
  background-color:${({ enabled }) => (enabled ? '#6a53856e' : 'transparent')};
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
  justify-content: space-between; 
  align-items:center;
  flex-direction:row;
`;
export const Input2 = styled(Input)`
  width: 70%;
  height:60%;
  border:none;  
  margin-left:1%;
`;