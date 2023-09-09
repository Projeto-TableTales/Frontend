import {Button, Container, Form, Input, Link, Title } from "./styled";
/*import { useNavigate } from "react-router-dom/dist";
import { useState } from "react";
import { logIn } from "../../Services/request";
const LoginForm = () => {
    const navigate = useNavigate()
    const [messageError, setMessageError] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [sucesso, setSucesso] = useState(false)
    const handleButtonClick = (event) => {
      event.preventDefault();
      const body = {senha,email}
  
      logIn('login', body,setSucesso,setMessageError)
      sucesso && navigate('/')
    }
    const onChangeEmail = (event) => {
      setEmail(event.target.value);
    };
    const onChangeSenha = (event) => {
      setSenha(event.target.value);
    };*/
const LoginForm = () => {
    return(
        <Container>
            <Title> SIGN IN</Title>
            <Form>
                <Input type="email" placeholder="E-mail"/>
                <Input type="password" placeholder="Password"/>
                <Link to="/forgotPassword">Forgot your password?</Link>
                <Button>ENTER</Button>
            </Form>
            <p>New here? <Link to="/register">Create an account</Link> </p>
        </Container>
    )
}

export default LoginForm;