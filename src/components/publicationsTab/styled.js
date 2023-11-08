import styled from "styled-components";

export const Container = styled.div`
  max-width: 84vw;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  display:flex;
  background-color: rgba(224, 182, 251, 0.42);
`;

export const LeftContainer = styled.div`
  width: 55vw;
  flex-direction: column;
  align-items: center;
  display:flex;
  background-color: rgba(224, 182, 251, 0.42);
`;

export const Frame = styled.div`
  margin-top:5vh;
  width: 90%;
  height:15vh;
  display: flex;
  background-color: #1E1429;
  border-radius: 10px;
  justify-content: left; 
  align-items: center;

`;

export const Frame3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin:5vh 0;
  width: 90%;
  min-height:45vh;
`;
export const Frame2 = styled.div`
  margin-top:5vh;
  margin-left:5vh;
  width: 20vw;
  height:50vh;
  display: flex;
  background-color: #1E1429;
  border-radius: 10px;
  justify-content: right; 
  align-items: center;
`;
export const Img = styled.img`
  border-radius:50%;
  border: 4px solid #AB5F91;
  width: 4.5vw;
  display: flex;
  background-color: white;
  justify-content: center; 
  align-items: center;
  margin-left:3%;
`;
export const Icon = styled.button`
  display: flex;
  justify-content: center; 
  align-items: center;
  color: black;
  background-color: #AB5F91;
  border: 2px solid black;
  border-radius: 50%;
  width: 6vh;
  height:6vh;
  transition: color 0.3s, background-color 0.3s, border-color 0.3s;
    svg {
      font-size: 28px; 
    }
    &:hover {
      color: pink;
      background-color: black;
      border-color: black;
    }
`;
export const Input = styled.input`
  width: 42vw;
  height:5vh;
  background-color:#7D6498;
  border:none;
  border-radius: 10px;
  margin-right:2%;
  margin-left:2%;
`;

