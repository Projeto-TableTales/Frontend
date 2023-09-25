import './App.css';
import { GlobalStyle } from './GlobalStyle';
import { AppRouter } from './routes/router';

export const App = () => {
  return (
    <> 
      <GlobalStyle />
      <AppRouter/>
    </>

  
  );
}

