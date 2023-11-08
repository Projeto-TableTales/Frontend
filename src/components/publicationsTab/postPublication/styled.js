import styled from "styled-components";


export const Container = styled.div`
  width: 95%;
  display:flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: rgba(224, 182, 251, 0.42);
`;

export const ImgContainer = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    padding: 10px 20px;
    gap:1vw;
`;

export const PostUserInfo = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    padding: 20px 0;
`;

export const Img = styled.img`
  border-radius:50%;
  border: 4px solid #AB5F91;
  width: 3.5vw;
  height: 3.5vw;
`;

export const Nome = styled.span`
    text-transform: capitalize;
    font-weight: bold;
`;

export const Data = styled.span`
    font-size: 13px;
`;

export const PostContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: left;
    padding: 5px 30px;
`;

export const PostTitulo = styled.span`
    font-weight: bold;
`;
export const PostConteudo = styled.span`
    text-align: justify;
    margin-top: 5px;
`;

export const IconsContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: left;
    padding: 5px 30px;
    gap:15px;
`;

export const Icons = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    gap: 2px;
`;
