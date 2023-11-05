import React from 'react';

const PostPublication = ({ userName, titulo, comentario, tipoArquivo }) => {
  return (
    <div>
      <h2>Publicado por: {userName}</h2>
      <h3>Título: {titulo}</h3>
      <p>Comentário: {comentario}</p>
      <p>Tipo de Arquivo: {tipoArquivo}</p>
      {/* Adicione o código para exibir a imagem, vídeo ou arquivo GIF aqui */}
    </div>
  );
};

export default PostPublication;