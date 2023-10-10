import React from 'react';
import './App.css';
import Logo from '../img/logo_2.png';
import Lupa from '../img/lupa.svg';
import Casa from '../img/casa.png';
import Chat from '../img/chat.png';
import Sino from '../img/sino.png';
import Home from '../img/perfil.png';
import Teste from '../img/bruxo.png';
import Ladrao from '../img/ladrao.png';
import Campanha from '../img/Frame_1.png'
import Insta from '../img/icon_instagram.png'
import face from '../img/icon_facebook.png'
import twi from '../img/icon_twitter.png'


function Perfil_Usuario() {
  return (
    <div>
      <header className="logo">
        <img src={Logo} alt="logo2" style={{ maxWidth: "10rem" }} />
        <div className="search-box">
          <input type="text" className="search-text" placeholder="Pesquisar aqui" />
          <a className="search-btn">
            <img className="LupaAzul" src={Lupa} alt="lupaazul" width="25px" height="20px" />
          </a>
        </div>
        <div className="imagem-container">
          <a href="/"><img className="icons" src={Casa} alt="icons-duelo" /> </a>
          <a href="/"><img className="campanha" src={Campanha} alt="icons-campanha" /> </a>
          <a href="/"><img className="icons" src={Chat} alt="icons-chat" /> </a>
          <a href="/"><img className="icons" src={Sino} alt="icons-sino" /> </a>
          <a href="/"><img className="icons" src={Home} alt="icons-perfil" /> </a>
        </div>
      </header>

      <div className="PapelDeParede">
        <img src={Teste} alt="teste" style={{ maxWidth: "100%", opacity: 0.5 }} />
        {/*
        <form class="ImagemDeFundo" action="processar_foto" method="post" enctype="multipart/form-data">
            <label for="foto">Selecione uma foto:</label>
            <input type="file" id="foto" name="foto" accept="image/*">
            <button type="submit">Enviar Foto</button>
          </form>*/}
      </div>

      <div className="Circulo">
        <img src={Ladrao} alt="teste" style={{ maxWidth: "100%" }} />
        {/*<form class="FotoDoPerfil" action="processar_foto" method="post" enctype="multipart/form-data">
            <label for="foto">Selecione uma foto:</label>
            <input type="file" id="foto" name="foto" accept="image/*">
            <button type="submit">Enviar Foto</button>
        */}
        <h1 className="NomeDoJogador">Nome do Jogador</h1>
        <p className="status">Online</p>
      </div>

      <div className="BarraOpcoes">
        <div className="barra">
          <a href="/"><p className="opcao">Publicações</p></a>
          <a href="/"><p className="opcao">Sobre você</p></a>
          <a href="/"> <p className="opcao">Personagens</p></a>
          <a href="/"> <p className="opcao">Campanhas</p></a>
          <a href="/"> <p className="opcao">Amigos</p></a>
        </div>
      </div>
      <div className="descricao">
        <p >Descrição:</p>
      </div>
      <div className="pais">
        <p>País: Brasil</p>
      </div>
      <div className="socias">
        <p>Links Sociais:</p>
        <div className="link">
          <a href="/"> <img className="insta" src={Insta} alt="instagram" srcset="" /></a>
          <a href="/"> <img className="face" src={face} alt="Facebook" srcset="" /></a>
          <a href="/"> <img className="twi" src={twi} alt="Twitter" srcset="" /></a>
        </div>
      </div>

      <div className="reta">
        <p className="Rpg">Preferências de RPG:</p>
        <p className="narrativa">Narrativa:</p>
        <p className="experiencia">Experiencia:</p>
        <p className="TipoDeJogador">Tipo de Jogador:</p>
        <p className="cargo">Cargo:</p>
      </div>

      <div className="reta2">
        <p>Gêneros favoritos:</p>
        <div class="retangulo2"></div>
        <div class="retangulo2"></div>
        <div class="retangulo2"></div>
      </div>

    </div>

  );

}



export default Perfil_Usuario;