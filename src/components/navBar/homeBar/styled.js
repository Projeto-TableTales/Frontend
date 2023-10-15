import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: #2c0445;
  align-items: center;
  flex-direction: row;
  height: 15vh;
  z-index: 100;
`;
// export const Span = styled.span`
//     color: #D2C5C5;
//     background-color: #643A6F;
//     padding: 10px;
//     margin-left: 50px;
//     font-size: 20px;
//     border-radius: 14px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 10px;
//     cursor: pointer;
//     border: none;
//     outline: none;
//     &:hover{
//         background-color: #070810;
//         box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
//     }
// `;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
  height: 90%;
`;
export const Img = styled.img`
  max-height: 100%;
  width: auto;
  margin-right: 20px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 60vh;
  margin-right: 60vh;
  width: 500px;
`;
export const Bar = styled.input`
  width: 100%;
  padding: 5px;
  background-color: #7d40a4;
  border: none;
  border-radius: 5px;
`;
export const Icons = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 15vh;
  margin-right: 5vh;
`;

export const Frame = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2vh;
  span {
    color: black;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6vh;
    height: 6vh;
    transition: color 0.3s, background-color 0.3s, border-color 0.3s;
    svg {
      font-size: 26px;
    }
    &:hover {
      color: pink;
      background-color: black;
      border-color: black;
    }
  }
  a {
    color: black;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6vh;
    height: 6vh;
    transition: color 0.3s, background-color 0.3s, border-color 0.3s;
    svg {
      font-size: 28px;
    }
    &:hover {
      color: pink;
      background-color: black;
      border-color: black;
    }
  }
`;

export const Span = styled.span`
  text-decoration: none;
`;
export const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;
