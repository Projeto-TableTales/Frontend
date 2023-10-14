import {Container,
        Form,
        Description,
        InputDescription,
        Titulo,
        Country,
        Input,
        Preferencias} from "./styled";

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
                    <div> 
                        <Titulo>NARRATIVAS</Titulo>
                        <Input type="text" /></div>
                    <div> 
                        <Titulo>NARRATIVAS</Titulo>
                        <Input type="text" /></div>
                    <div> 
                        <Titulo>NARRATIVAS</Titulo>
                        <Input type="text" /></div>
                    <div> 
                        <Titulo>NARRATIVAS</Titulo>
                        <Input type="text" /></div>
                </Preferencias>
                <div>
                    <input type="text" />
                </div>
            </Form>
        </Container>
            
    );
  }
  
  export default AboutTab;