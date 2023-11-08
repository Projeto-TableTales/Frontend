import React from 'react';
import UserPerfil from "../../../assets/UserPerfil.jpg";
import {AiOutlineHeart, AiFillHeart, AiOutlineComment} from 'react-icons/ai';
import { Container, ImgContainer, PostUserInfo, Img, Nome, Data, PostContainer, PostTitulo, PostConteudo, IconsContainer, Icons } from './styled';

const PostPublication = ({ post, usuario }) => {
  return (
    <Container >
      <ImgContainer>
        <Img src={UserPerfil} alt="imagemPerfil" />
        <PostUserInfo>
          <Nome>{usuario?.nome}</Nome>
          <Data>{post?.dataPost}</Data>
        </PostUserInfo>
      </ImgContainer>
      <PostContainer>
        <PostTitulo>{post?.titulo}</PostTitulo>
        <PostConteudo>{post?.conteudo}</PostConteudo>
      </PostContainer>
      <IconsContainer>
        <Icons>
          <AiOutlineHeart />
          <span>{post?.likes}</span>
        </Icons>
        <Icons>
          <AiOutlineComment />
          <span>{post?.comentarios.length}</span>
        </Icons>
      </IconsContainer>
      
    </Container>
  );
};

export default PostPublication;