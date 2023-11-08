import {
    ScreenBackground,
    ModalFrame,
    Button,
    Titulo,
    UserName,
    TituloPubli,
    Comentario,
    SelecionarArquivo,
    SubTitulo,
    ButtonSelect,
    Img,
    User,
    Divider,
    Editaveis,
    ButtonAdd
} from "./styled";
import { RxCross2 } from 'react-icons/rx';
import { BsImages } from 'react-icons/bs';
import { BiSolidVideos } from 'react-icons/bi';
import { AiOutlineFileGif } from 'react-icons/ai';
import UserPerfil from "../../../assets/UserPerfil.jpg";
import { useState } from "react";
const ModalCriarPubli = ({ isOpen, setModalOpen, criarPublicacoes, usuario }) => {



    const [titulo, setTitulo] = useState('');
    const [conteudo, setComentario] = useState('');
    // const [tipoArquivo, setTipoArquivo] = useState('Imagem'); // Padrão para imagem

    const handleTituloChange = (e) => {
        setTitulo(e.target.value);
    };

    const handleComentarioChange = (e) => {
        setComentario(e.target.value);
    };

    const click = () => {
        
        const body = {
            titulo,
            conteudo
        }
        criarPublicacoes(body);
        setTitulo("");
        setComentario("");
        setModalOpen(false);
    }

    if (isOpen) {
        return (
            <ScreenBackground>
                <ModalFrame>

                    <Titulo>CRIAR PUBLICAÇÃO</Titulo>
                    <Divider className="LinhaDivisoria"></Divider>

                    <User>
                        <Img src={UserPerfil} alt="ImagemPerfil" />
                        <UserName>{usuario.nome}</UserName>
                    </User>

                    <Editaveis>
                        <TituloPubli
                            type="text"
                            name="Titulo da Publicação"
                            id="Titulo da Publicação"
                            value={titulo}
                            onChange={handleTituloChange}
                        />
                        <Comentario
                            type="text"
                            name="Comentário"
                            id="Comentário"
                            value={conteudo}
                            onChange={handleComentarioChange}
                        />
                    <ButtonAdd onClick={click}>Adicionar</ButtonAdd>
                    </Editaveis>

                    <SelecionarArquivo>
                        <SubTitulo>Adicionar a Publicação:</SubTitulo>
                        <ButtonSelect><BsImages /></ButtonSelect>
                        <ButtonSelect><BiSolidVideos /></ButtonSelect>
                        <ButtonSelect><AiOutlineFileGif /></ButtonSelect>
                    </SelecionarArquivo>

                    <Button onClick={() => setModalOpen(false)}><RxCross2 /></Button>
                </ModalFrame>

            </ScreenBackground>
        );
    }
    return null;

}

export default ModalCriarPubli;