import { Container, Frame, Icon, Img, Input, Frame2, LeftContainer, Frame3 } from "./styled";
import { RiShieldCrossFill } from 'react-icons/ri';
import UserPerfil from "../../assets/UserPerfil.jpg";
import { useEffect, useState } from "react";
import ModalCriarPubli from "../modal/modalCriarPubli/modalCriarPubli";
import { createGlobalStyle } from 'styled-components';
import api from "../../api/api";
import PostPublication from "./postPublication/postPublication";
const PublicationsTab = () => {
    const [openModal, setOpenModal] = useState(false);
    const [postagem, setPostagem] = useState([]);
    const [usuario, setUsuario] = useState([]);

    const GlobalStyle = createGlobalStyle`
    body {
      overflow: ${({ modalOpen }) => (modalOpen ? 'hidden' : 'auto')};
    }
  `;
    useEffect(() => {
        api.get(`/perfil`)
            .then(response => {
                const usuario = response.data;
                setUsuario(usuario);
            });
        getPublicacoes();
    }, []);

    const getPublicacoes = () => {
        const id = localStorage.getItem("id");
        api.get(`/post/buscarAll/${id}`)
            .then(response => {
                const postagens = response.data;
                setPostagem(postagens);

            })
            .catch((error) => {
                console.error('Erro ao obter os dados do usuário:', error.data);
            });
    }

    const criarPublicacoes = (body) => {

        api.post(`/post/criarPost`, body)
            .then(response => {
                getPublicacoes();
            })
            .catch((error) => {
                console.error('Erro ao obter os dados do usuário:', error.data);
            });

        getPublicacoes();
    }

    const publicacoesUser = () => {
      
            return postagem.map((post, index) => {
                return (
                    <PostPublication post={post} usuario={usuario} />
                )

            });

    };

    return (
        <Container>
            <LeftContainer>

                <Frame>
                    <Img src={UserPerfil} alt="imagemPerfil" />
                    <Input type="text" readOnly />
                    <Icon onClick={() => setOpenModal(true)}>
                        <RiShieldCrossFill />
                    </Icon>
                </Frame>
                <Frame3>
                    {publicacoesUser()}
                </Frame3>
            </LeftContainer>
            <ModalCriarPubli isOpen={openModal} setModalOpen={setOpenModal} criarPublicacoes={criarPublicacoes} usuario={usuario} />
            <Frame2>
                <h1>Camapnhas e rpg</h1>
            </Frame2>
            <GlobalStyle modalOpen={openModal} />
        </Container>
    );
}

export default PublicationsTab;