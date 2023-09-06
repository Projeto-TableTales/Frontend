
import { useState } from "react";
import { signup } from "../../Services/request";
import { useForm } from "../../hooks/useform";
import { Box, Button, Container, Form, Input, Link, Title } from "./styled";
import { useNavigate } from "react-router-dom";


const RegisterForm = () => {
 
  const navigate = useNavigate()
  const [messageError, setMessageError] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [sucesso, setSucesso] = useState(false)
  const handleButtonClick = (event) => {
    event.preventDefault();
    const body = {nome,senha,email}

    signup('register', body,setSucesso,setMessageError)
    sucesso && navigate('/')
  }
  const onChangeNome = (event) => {
    setNome(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  };
  return (
    <Container>
      <Title> SIGN UP</Title>
      <Form onSubmit={handleButtonClick}> 
        <Input placeholder="User name" value={nome} onChange={onChangeNome} />
        <Input placeholder="E-mail"value={email} onChange={onChangeEmail} />
        <Input type="password" placeholder="Confirm Password" value={senha} onChange={onChangeSenha}/>

        <Button>ENTER</Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
