import { logIn } from "../../Services/request";
import { Button, Container, Form, Input, Title} from "./styled";
import { Link } from 'react-router-dom';
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
    };
    return(
        <Container>
            <Title> SIGN IN</Title>
            <Form>

                    <Input type="email" placeholder="E-mail" value={email} onChange={onChangeEmail}/>
                    <Input type="password" placeholder="Password" value={senha} onChange={onChangeSenha}/>
                    <Link href="">Forgot your password?</Link>
                <Button>ENTER</Button>
            </Form>
            
            <p>New here? <Link to="/register">Create an account</Link> </p>
        </Container>
    )
}

export default LoginForm;
