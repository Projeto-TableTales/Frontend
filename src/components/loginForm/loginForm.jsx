import { Button, Container, Form, Input, Link, Title } from "./styled";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate(); 

  const submit = async (e) => {
    e.preventDefault();
    console.log(email, senha);
    try {
      const response = await axios.post("http://localhost:8080/rpgwiki/login", {
        email: email,
        senha: senha,
      });
      // Extrair o token da resposta
      const token = response.data.token;

      // Armazenar o token no localStorage
      localStorage.setItem("token", token);

      console.log(111);
      navigate("/home");
    } catch (error) {
      console.error("Erro de login:", error);
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
