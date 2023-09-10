import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  EmailInput,
  Link,
  Line,
  Title,
  ErrorMessage,
} from "./styled";
import axios from "axios";
import { Navigate } from "react-router-dom";

const RegisterForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [role] = useState("USER");
  const [genero, setGenero] = useState("");
  const [pais, setPais] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [navigate, setNavigate] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/rpgwiki/register",
        {
          nome,
          pais,
          email,
          senha,
          genero,
          role,
          dataNascimento,
        }
      );
      // Extrair o token da resposta
      const token = response.data.token;

      // Armazenar o token no localStorage
      localStorage.setItem("token", token);
      setNavigate(true);

      if (navigate) {
        return <Navigate to="/home" />;
      }
    } catch (error) {
      console.error("Erro de registro:", error);
      if (error.response) {
        setErrMsg("Ocorreu um erro ao fazer o registro. Tente novamente.");
      }
    }

  };
  return (
    <Container>
      <Title> SIGN UP</Title>
      <Form onSubmit={submit}>
        <Line>
          <Input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
        </Line>
        <Line>
          <Input
            type="senha"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Input
            type="senha"
            placeholder="ConfirmSenha" /* onChange={e => setConfirmSenha(e.target.value)}*/
          />
        </Line>
        <EmailInput
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Line>
          <Input
            type="text"
            placeholder="Pais"
            onChange={(e) => setPais(e.target.value)}
          />
          <Input
            type="text"
            placeholder="DataNascimento"
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </Line>
        {errMsg ? <ErrorMessage>{errMsg}</ErrorMessage> : null}
        <Button type="submit">REGISTER</Button>
      </Form>
      <p>
        Already have an account?<Link to="/login">Login</Link>{" "}
      </p>
    </Container>
  );
};

export default RegisterForm;
