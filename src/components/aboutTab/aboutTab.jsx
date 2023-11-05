import {Container,
        Form,
        Description,
        InputDescription,
        Titulo,
        Country,
        Input,
        Preferencias,
        Boxx,
        Input2} from "./styled";

const AboutTab = () => {
  
    return (
        <Container>
            <Form>
                <Description>
                    <Titulo>DESCRIÇÃO:</Titulo>
                    <InputDescription type="text" />
                </Description> 
                <Country>
                    <Titulo>PAIS:</Titulo>
                    <Input type="text" />
                </Country>
                <Preferencias>
                    <Titulo>PREFERENCIAS</Titulo>
                    <Boxx> 
                        <Titulo>NARRATIVAS</Titulo>
                        <Input2 type="text" />
                    </Boxx>
                    <Boxx> 
                        <Titulo>EXPERIENCIA</Titulo>
                        <Input2 type="text" />
                    </Boxx>
                    <Boxx> 
                        <Titulo>TIPO DE JOGADOR</Titulo>
                        <Input2 type="text" />
                    </Boxx>
                    <Boxx> 
                        <Titulo>CARGO</Titulo>
                        <Input2 type="text" />
                    </Boxx>
                </Preferencias>
                <div>
                    <input type="text" />
                </div>
            </Form>
        </Container>
            
    );
  }
  
  export default AboutTab;