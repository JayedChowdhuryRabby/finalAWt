import logo from './logo.svg';
import './App.css';
import Header from './Header';
import{BrowserRouter,Route,Router,Routes}from 'react-router-dom'
import Login from './Compnent/Customer/Login';
import Register from './Compnent/Customer/Register';
import AddProduct from './Compnent/Client/AddProduct';
import ProductList from './Compnent/Client/ProductList';
import AdminDashboard from './Compnent/Admin/AdminDashboard';
import ClientList from './Compnent/Client/ClientList';
import CustomerList from './Compnent/Customer/CustomerList';

import ClientRegister from './Compnent/Client/ClientRegister';
import Logout from './Compnent/Customer/Logout';
import CustomerDashboard from './Compnent/Customer/CustomerDashboard';
import ClientDashboard from './Compnent/Client/ClientDashboard';
import Mailer from './Compnent/Client/Mailer';
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
    <Route exact path='/dashboard' element={<CustomerDashboard/>} />
    <Route exact path='/clientDasboard' element={<ClientDashboard/>} />
    <Route exact path='/adminDasboard' element={<AdminDashboard/>} />
    <Route exact path='/addproduct' element={<AddProduct/>} />
    <Route exact path='/productlist' element={<ProductList/>} />
    <Route exact path='/clientlist' element={<ClientList/>} />
    <Route exact path='/customerlist' element={<CustomerList/>} />
    <Route exact path='/mailer' element={<Mailer/>} />
 
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
