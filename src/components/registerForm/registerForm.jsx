import {  Button, Container, Form, Input, Link, Title } from "./styled";

const RegisterForm = () => {
  return (
    <Container>
      <Title> SIGN UP</Title>
      <Form>
        <Input type="username" placeholder="User name" />
        <Input type="email" placeholder="E-mail" />
        <Input type="confirmPassword" placeholder="Confirm Password" />

        <Button>ENTER</Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
