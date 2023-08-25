import { Button, Container, Form, Input, Title} from "./styled";
import { Link } from 'react-router-dom';
const LoginForm = () => {
    return(
        <Container>
            <Title> SIGN IN</Title>
            <Form>

                    <Input type="email" placeholder="E-mail"/>
                    <Input type="password" placeholder="Password"/>
                    <Link href="">Forgot your password?</Link>
                <Button>ENTER</Button>
            </Form>
            
            <p>New here? <Link to="/register">Create an account</Link> </p>
        </Container>
    )
}

export default LoginForm;