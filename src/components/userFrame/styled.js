import styled from "styled-components";

export const CoverContainer = styled.div`
  width: 84vw;
  height: 98vh; 
  display: flex;
  justify-content: center; 
  align-items: top;
  background-color: rgba(224, 182, 251, 0.42);
`;

export const ImagemCoverContainer = styled.div`
  position: relative;  
`;
export const CoverImage = styled.img`
  width: 80vw;
  height: 75vh;
  border-radius: 10px;
  object-fit: cover;
  background-size:10%;
`;

export const EditButton = styled.button`
  position: absolute;
  bottom: 27vh;
  right: 2vh;
  background-color: rgba(106, 47, 165, 0.65);
  color: white;
  padding: 1% 2%;
  border-radius:10px;
  border:none;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  position: absolute;
  top: 55%; 
  left: 3%; 
  width:35vh;
  border: 4px solid white;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-color:white;
`;

export const UserName = styled.span`
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;
  color:white;
  position: absolute;
  top: 78%; 
  left: 30%; 
`;