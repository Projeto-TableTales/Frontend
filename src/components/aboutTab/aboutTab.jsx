import { useEffect, useState } from "react";
import {
    Container,
    Form,
    Description,
    InputDescription,
    Titulo,
    Country,
    Input,
    Preferencias,
    Boxx,
    Input2,
    TituloSessao,
    TituloItens,
    TituloCountry
} from "./styled";
import api from "../../api/api";

const AboutTab = () => {
    const [enabled, setEnabled] = useState([false, false, false, false]);
    const [form, setForm] = useState({
        biografia: "",
        pais: "",
        narrativa: "",
        experiencia: "",
        cargo: "",
        tipoDeJogador: ""
    });
    const [usuario, setUsuario] = useState("");
    useEffect(() => {
        getUserInfo();
    }, []);
    const getUserInfo = () => {
        api.get(`/perfil`)
            .then(response => {
                const usuario = response.data;
                setUsuario(usuario);
                const formAux = {
                    biografia: usuario.biografia,
                    pais: usuario.pais,
                    narrativa: usuario.narrativa,
                    experiencia: usuario.experiencia,
                    cargo: usuario.cargo,
                    tipoDeJogador: usuario.tipoDeJogador
                }

                setForm(formAux);
            })
            .catch((error) => {
                console.error('Erro ao obter os dados do usuário:', error.data);
            });
    }


    const handleClick = (index) => {
        const aux = [...enabled];
        aux[index] = !enabled[index]
        setEnabled(aux);
    };

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    };

    const submit = (event) => {
        event.preventDefault();
        console.log(form)
    }
    return (
        <Container>
            <Form onSubmit={submit}>
                <Description>
                    <Titulo>DESCRIÇÃO:</Titulo>
                    <InputDescription type="text"
                        name="descricao"
                        onChange={handleChange}

                    />
                </Description>
                <Country>
                    <TituloCountry>PAIS:</TituloCountry>
                    <Input type="text"
                        name={"pais"}
                        onChange={handleChange} />
                </Country>
                <Preferencias>
                    <TituloSessao>PREFERENCIAS DE RPG: </TituloSessao>
                    <Boxx>
                        <TituloItens>NARRATIVAS</TituloItens>
                        <Input2 type="text"
                            enabled={enabled[0]}
                            onClick={() => handleClick(0)}
                            readOnly={!enabled[0]}
                            name={"narrativa"}
                            onChange={handleChange} />
                    </Boxx>
                    <Boxx>
                        <TituloItens>EXPERIENCIA</TituloItens>
                        <Input2 type="text"
                            enabled={enabled[1]}
                            onClick={() => handleClick(1)}
                            readOnly={!enabled[1]}
                            name={"experiencia"}
                            onChange={handleChange} />
                    </Boxx>
                    <Boxx>
                        <TituloItens>TIPO DE JOGADOR</TituloItens>
                        <Input2 type="text"
                            enabled={enabled[2]}
                            onClick={() => handleClick(2)}
                            readOnly={!enabled[2]}
                            name={"tipoDeJogador"}
                            onChange={handleChange} />
                    </Boxx>
                    <Boxx>
                        <TituloItens>CARGO</TituloItens>
                        <Input2 type="text"
                            enabled={enabled[3]}
                            onClick={() => handleClick(3)}
                            readOnly={!enabled[3]}
                            name={"cargo"}
                            onChange={handleChange} />
                    </Boxx>
                </Preferencias>
                <div>
                    <input type="text" />
                </div>
                <button type="submit"> Atualizar</button>
            </Form>
        </Container>

    );
}

export default AboutTab;