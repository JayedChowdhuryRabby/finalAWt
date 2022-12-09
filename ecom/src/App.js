import logo from './logo.svg';
import './App.css';
import Header from './Header';
import{BrowserRouter,Route,Router,Routes}from 'react-router-dom'
import Login from './Compnent/Customer/Login';
import Register from './Compnent/Customer/Register';

import ClientRegister from './Compnent/Client/ClientRegister';
import Logout from './Compnent/Customer/Logout';
import axios from 'axios';

axios.defaults.baseURL="http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.post['Accept']='application/json';
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path='/login' element={<Login/>} />
    <Route exact path='/register' element={<Register/>} />
    <Route exact path='/client/register' element={<ClientRegister/>} />
    <Route exact path='/logout' element={<Logout/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
