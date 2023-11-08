import styled from "styled-components";

export const ScreenBackground = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color:rgba(20, 11, 29, 0.70);
    z-index:1000;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export const ModalFrame = styled.div`
    position:absolute;
    width:60vw;
    height:60vh;
    top:20%;
    left:20%;
    border-radius: 20px;
    background-color:#090210;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`;
export const Button = styled.button`
    position:absolute;
    top:1.5%;
    left:94%;
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

 // Essa parte diz respeito a parte do titulo Criar Publicação       

export const Titulo = styled.p`
    color:#8A7D98;
    font-size:15px;
    position:absolute;
    top:1%;
`;
export const Divider = styled.div`
    width: 100%;
    height: 2px; 
    top:13%;
    position:absolute;
    background-color: #8A7D98; 
`;
// Aqui começa a parte em si das informações do Usuario

export const User = styled.div`
    width:100%;
    top:15%;
    position:absolute;
    display: flex;
    justify-content: left; 
    align-items: center;
    flex-direction:row;
    
`;
export const Img = styled.img`
    border-radius:50%;
    border: 2px solid #AB5F91;
    width: 3.5vw;
    display: flex;
    background-color: white;
    justify-content: center; 
    align-items: center;
    margin-left:3%;
    margin-right:1%;;
`;
export const UserName = styled.span`
    color:#8A7D98;
    font-size:17px;
    text-transform: capitalize;
`;

// Inicio dos componentes editaveis:

export const Editaveis = styled.div`
    width:100%;
    top:32%;
    position:absolute;
    display: flex;
    align-items: center;
    flex-direction:column;
    gap: 5vh;
    
`;
export const TituloPubli = styled.input`
    width: 55vw;
    height:5vh;
    border: 2px solid #8A7D98;
    background-color:#090210;
    border-radius: 10px;
    color:white;
`;
export const Comentario = styled.input`
    width: 55vw;
    height:10vh;
    border: 2px solid #8A7D98;
    background-color:#090210;
    border-radius: 10px;
    color: white;
    
`;

// Seleção de arquivos de imagem e video :

export const SelecionarArquivo = styled.div`
    width:100%;
    top:82%;
    position:absolute;
    display: flex;
    align-items: center;
    flex-direction:row;
    justify-content: right;
    margin-right:7%;
`;
export const SubTitulo = styled.p`
    color:#8A7D98;
    font-size:15px;
    margin-right:3%;
`;
export const ButtonSelect = styled.button`
    display: flex;
    cursor: pointer;
    justify-content: center; 
    align-items: center;
    color: black;
    background-color: #AB5F91;
    border: 2px solid black;
    border-radius: 30%;
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
export const ButtonAdd = styled.button`
    display: flex;
    cursor: pointer;
    justify-content: center; 
    align-items: center;
    color: black;
    background-color: #AB5F91;
    border: 2px solid black;
    border-radius: 10px;
    width: 12vh;
    height:6vh;
    &:hover {
        color: pink;
        background-color: black;
        border-color: black;
        }
`;
 