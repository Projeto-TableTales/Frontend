import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importando as componentes BrowserRouter, Routes e Route
// da biblioteca react-router-dom.

function App(){
    return (
        <div>
            <h1 id="primeiro_h1">Esqueceu a Senha?</h1>
            <div id="cor_tamanho_texto_1" class="estilo_div_1">
                <form action="" method="post">
                    <p>
                        <label for="login">Login &nbsp; &nbsp;</label>
                        <input type="text" id="loginJogador" name="loginJogador" />
                    </p>
                    <p>
                        <label for="login">E-Mail &nbsp;</label>
                        <input type="email" id="loginJogador" name="loginJogador" />
                    </p>
                    <p>
					    <input type="submit" value="Enviar" />
				    </p>
                </form>
            </div>
            <a class="estilo_classe_1" href="">Voltar a Página Inicial</a>
        </div>
    )
}

export default App