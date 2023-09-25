import NavBar from "../../components/navBar/homeBar/navBar";
import { useProtectedPage } from "../../hooks/useProtected";

const Home = () => {
  useProtectedPage();
  return <NavBar />;
};
export default Home;
