import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importando as componentes BrowserRouter, Routes e Route
// da biblioteca react-router-dom.

function Perfil_Usuario(){
    return (
        <div>

            <div id="cor_tamanho_texto_1" class="estilo_div_1">
            
                <form action="" method="post">
                    <p>
					    <input type="submit" value="Adicionar Capa" />
				    </p>
                </form>
            </div>

            <img  class="imagemPrincipal_Usuario" src="./src/img_sem_foto.jpg" />
            <p class="estilo_nome_perfil"> Nome do Perfil <br/> </p>
            <p class="estilo_dados_iniciais"> Status Atual <br/> </p>
            <p class="estilo_dados_iniciais"> Nível de Experiência </p>

            <div class="estilo_div_2">
                Descrição
            </div>

            <div class="centralizar_lista">
                <ul>
                     <li><a href="">Informação Pessoal</a></li>
                      <li><a href="">Experiências</a></li>
                      <li><a href="">Personagens</a></li>
                      <li><a href="">Mesas</a></li>
                      <li><a href="">Históricos de Mensagens</a></li>
                </ul>
            </div>

            <div class="estilo_div_3">
                País : 
            </div>
            <div class="estilo_div_3">
                Links Sociais : 
            </div>
            <div class="estilo_div_3">
                Preferências de Jogo: <br/>
                Narrativa: <br/>
                Ritmo de Partidas: <br/>
                Duração das Sessões: <br/>
            </div>
            <div class="estilo_div_3">
                Gêneros de RPG Favoritos:
            </div>
        </div>
    )
}

export default Perfil_Usuario