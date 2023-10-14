import NavBar from "../../components/navBar/homeBar/navBar";
import { useProtectedPage } from "../../hooks/useProtected";
import { Container } from "./styled";

const Home = () => {
  useProtectedPage();
  return (  
    <Container>
      <NavBar />;
    </Container>
  )
  
  
};
export default Home;
