import {
  Button,
  Container,
  Form,
  Input,
  Link,
  Title,
  ErrorMessage,
} from "./styled";
import { useEffect, useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    token && navigate("/home");
  }, [navigate]);

  const submit = async (e) => {
    e.preventDefault();
    console.log(email, senha);
    try {
      const response = await api.post("/rpgwiki/login", {
        email: email,
        senha: senha,
      });
      // Extrair o token da resposta
      const token = response.data.token;

      // Armazenar o token no localStorage
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      console.error("Erro de login:", error);
      if (error.response) {
        setErrMsg("Credenciais inválidas. Verifique seu email e senha.");
      } else {
        setErrMsg(
          "Ocorreu um erro ao fazer o login. Tente novamente mais tarde."
        );
      }
    }
  };

  return (
    <Container>
      <Title>SIGN IN</Title>
      <Form onSubmit={submit}>
        <Input
          type="email"
          placeholder="E-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setSenha(e.target.value)}
        />
        {errMsg ? <ErrorMessage>{errMsg}</ErrorMessage> : null}
        <Link to="/forgotPassword">Forgot your password?</Link>
        <Button type="submit">ENTER</Button>
      </Form>
      <p>
        New here? <Link to="/register">Create an account</Link>
      </p>
    </Container>
  );
};

export default LoginForm;
