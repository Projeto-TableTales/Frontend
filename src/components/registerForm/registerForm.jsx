import { Box, Button, Container, Form, Input, Link, Title } from "./styled";

const RegisterForm = () => {
  return (
    <Container>
      <Title> SIGN UP</Title>
      <Form>
        <Box>
          <div>
            <Input type="username" placeholder="User name:" />
            <Input type="email" placeholder="E-mail:" />
          </div>

          <div>
            <Input type="password" placeholder="Password:" />
            <Input type="country" placeholder="Country:" />
            <Input type="dateBirth" placeholder="date of birth:" />
          </div>
          <div>

          <Input type="confirmPassword" placeholder="Confirm Password:" />
          </div>
        </Box>
        <Button>ENTER</Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
