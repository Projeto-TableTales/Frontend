import { Box, Button, Container, Form, Input, Link, Title } from "./styled";

const LoginForm = () => {
    return(
        <Container>
            <Title> SIGN IN</Title>
            <Form>
                <Box>
                    <Input type="email" placeholder="E-mail"/>
                    <Input type="password" placeholder="Password"/>
                    <Link href="">Forgot your password?</Link>
                </Box>
                <Button>ENTER</Button>
            </Form>
            <p>New here? <Link href="">Create an account</Link> </p>
        </Container>
    )
}

export default LoginForm;