import NavBar from "../../components/navBar/homeBar/navBar";
import { useProtectedPage } from "../../hooks/useProtected";
import { Container, BoxContainer, Publi } from "./styled";
import PostPublication from "../../components/publicationsTab/postPublication/postPublication";
import { useEffect, useState } from "react";
import api from "../../api/api";

const Home = () => {
  useProtectedPage();
  const [postagem, setPostagem] = useState([]);
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    api.get(`/perfil`).then((response) => {
      const usuario = response.data;
      setUsuario(usuario);
    });
    getPublicacoes();
  }, []);

  const getPublicacoes = () => {
    const id = localStorage.getItem("id");
    api
      .get(`/post/buscarAll/${id}`)
      .then((response) => {
        const postagens = response.data;
        setPostagem(postagens);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados do usuário:", error.data);
      });
  };

  const publicacoesUser = () => {
    return postagem.map((post, index) => {
      return <PostPublication post={post} usuario={usuario} />;
    });
  };
  return (
    <Container>
      <NavBar />;
      <BoxContainer>
        <Publi>{publicacoesUser()}</Publi>
      </BoxContainer>
    </Container>
  );
};
export default Home;
