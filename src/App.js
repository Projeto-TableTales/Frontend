import logo from './logo.svg';
import './App.css';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes> {/* Alterado de <Switch> */}
      <Route path="/" element={<Login />} /> {/* Alterado de <Route exact path="/login" component={Login} /> */}
      <Route path="/register" element={<Register />} /> {/* Alterado de <Route path="/register" component={Register} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;