import styled from "styled-components";

export const ScreenBackground = styled.div`
    width:100%;
    height:80%;
    position:fixed;
    display:flex;
    align-items: right;
    justify-content: center;
`;
export const ModalFrame = styled.div`
    position:absolute;
    width:25vw;
    height:30vh;
    bottom:2%;
    left:72%;
    border-radius: 5px;
    background-color:#0C0116;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`;

export const Button = styled.button`
  background: none;
  color: #D5B5ED;
  border: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  padding: 15px;
  margin-left: 28px;
  margin-right: 30px;
  letter-spacing: 1px;
  transition: border 80ms ease-in, text-decoration 80ms ease-in;
  cursor: pointer;

  &:hover {
    background-color: rgba(29,8, 49, 0.67);
    border-radius: 10px;
  }
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px; 
    background-color: #8A7D98; 
`;