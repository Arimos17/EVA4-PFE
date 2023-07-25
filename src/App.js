import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import Perfil from "./Components/Perfil";
import Forms from './Components/Forms';
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Menu/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/perfil" element={<Perfil/>}></Route>
        <Route path="/forms" element={<Forms/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
