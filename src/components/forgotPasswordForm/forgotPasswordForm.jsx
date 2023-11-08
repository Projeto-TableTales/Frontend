import {Button, Container, Error, Form, Input, Success, Title } from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import api from "../../api/api";

const ForgotPasswordForm = () => {
    const [email, setEmail]= useState("");
    const [successMsg, setSuccessMsg]= useState(null);
    const [errMsg, setErrMsg]= useState(null);
    const navigate = useNavigate();
    const submit = async (e) => {
        e.preventDefault();
        
        try {
          const body = {
            email
          }
          const response = await api.post("/rpgwiki/codigo-forgot",body);
          setSuccessMsg(response.data);
          window.localStorage.setItem('email', email);
          setTimeout(()=> {
            navigate("/codeRecovery")
          }, 2500)
        } catch (error) {
          console.error("Erro de registro:", error);
          if (error.response) {
            setErrMsg("Ocorreu um erro ao fazer o registro. Tente novamente.");
          }
        }
      };





    return(
        <Container>
            <Title> Forgot Password</Title>
            <Form onSubmit={submit}>
                <Input type="email" placeholder="E-mail" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <Button type={"submit"}>ENTER</Button>
            </Form>
            {successMsg && <Success>{successMsg}</Success> }
            {errMsg && <Error>{errMsg}</Error> }
        </Container>
    )
}

export default ForgotPasswordForm;