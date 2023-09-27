import { useNavigate } from "react-router-dom";
import { Button, Container, Error, Form, Input, Success, Title } from "./styled";
import React, { useState, useRef } from 'react';
import api from "../../api/api";

const CodeRecovery = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword]= useState("");
    const [code, setCode] = useState("");
    const [successMsg, setSuccessMsg]= useState(null);
    const [errMsg, setErrMsg]= useState(null);
    const navigate = useNavigate();
    const submit = async (e) => {
        e.preventDefault();
        try {
            const checkPass = password===confirmPassword;
            if(checkPass){
                const email = window.localStorage.getItem('email')
                const body = {
                    email,
                    senha: password,
                    codigoRecuperacaoSenha: code
                }
                const response = await api.post("/alterar-senha",body);
                    setSuccessMsg(response.data)
                setTimeout(()=> {
                    navigate("/login")
                }, 2500)
            } else {
                setErrMsg("Senhas não são iguais.");
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
        <Title>Recovery Code</Title>
        <Form onSubmit={submit}>
            <Input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder = "Recovery Code"
            />
            <Title>New Password</Title>
            <Input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Input type="password" placeholder="Confirm New Password"  value={confirmPassword}  onChange={(e) => setconfirmPassword(e.target.value)}/>
            
            <Button type={"submit"}>ENTER</Button>
        </Form>
        {successMsg && <Success>{successMsg}</Success> }
            {errMsg && <Error>{errMsg}</Error> }
      </Container>
    );
  };
  
  export default CodeRecovery;