import './App.css';
import { GlobalStyle } from './GlobalStyle';
import Perfil_Usuario from './pages/perfil/Perfil_Usuario';
import { AppRouter } from './routes/router';

export const App = () => {
  return (
    <> 
      <GlobalStyle />
      <AppRouter/>
      <Perfil_Usuario/>
    </>

  
  );
}

