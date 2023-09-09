import {Button, Container, Form, Input,EmailInput, Link,Line, Title} from "./styled";

/*import { useState } from "react";
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
  };*/
  
const LoginForm = () => {
    return(
        <Container>
            <Title> SIGN UP</Title>
            <Form>
                <Line>
                <Input type="usuario" placeholder="Usuario"/>
                <Input type="genero" placeholder="Genero"/>
                </Line>
                <Line>
                <Input type="password" placeholder="Password"/>
                <Input type="confirmPassword" placeholder="ConfirmPassword"/>
                </Line>

                <EmailInput type="email" placeholder="E-mail"/>
                
                <Line>
                <Input type="pais" placeholder="Pais"/>
                <Input type="dataNasc" placeholder="DataNasc"/>
                </Line>
                <Button>REGISTER</Button>
            </Form>
            <p>Already have an account?<Link to="/login">Login</Link> </p>
        </Container>
    )
}

export default LoginForm;