import {Button, Container, Form, Input, Title } from "./styled";

const ForgotPasswordForm = () => {
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