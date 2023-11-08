import NavBar from "../../components/navBar/homeBar/navBar";
import { useProtectedPage } from "../../hooks/useProtected";
import { Container,BoxContainer } from "./styled";

const Home = () => {
  useProtectedPage();
  return (  
    <Container>
      <NavBar />;
      <BoxContainer></BoxContainer>
    </Container>
  )
  
  
};
export default Home;
