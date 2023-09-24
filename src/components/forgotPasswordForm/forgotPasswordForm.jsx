import axios from "axios";
import {Button, Container, Form, Input, Title } from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

const ForgotPasswordForm = () => {
    const [email, setEmail]= useState("");
    const [successMsg, setSuccessMsg]= useState("");
    const [errMsg, setErrMsg]= useState("");
    const navigate = useNavigate();
    const submit = async (e) => {
        e.preventDefault();
        console.log( {
          email,
        })
        try {
          const response = await axios.post(
            "http://localhost:8080/rpgwiki/register",
            {
              email
            }
          );
            navigate("/login")
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
            <Form>
                <Input type="email" placeholder="E-mail"/>
                <Button>ENTER</Button>
            </Form>
        </Container>
    )
}

export default ForgotPasswordForm;