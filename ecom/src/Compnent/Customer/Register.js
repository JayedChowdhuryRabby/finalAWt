import React,{useState} from "react";
import{useNavigate} from 'react-router-dom'
import axios from "axios";
import swal from "sweetalert";
function Register()
{
    const [name, setName]=useState("");
    const [customer_id, setCustomer_id]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [address, setAddress]=useState("");
    const [phone, setPhone]=useState("");
    const history=useNavigate();

    async function signup()
    {
        
        let item={name,customer_id,email,password,address,phone}
        console.warn(item)

           axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('http://127.0.0.1:8000/api/register',item).then(res =>{
            if(res.status === 200)
            {
                localStorage.setItem('auth_token',res.token);
                localStorage.setItem('auth_name',res.username);
                swal("Suceessfully Registered", {
                    icon: "success",
                  });
                history('/login');

            }
            else 
            {
                history('/register');
            }
        });
    });

       
      
    }
    return(
        
        <div className="col-sm-6 offset-sm-3">
        <br/>
        <input type="text"  value ={name}  onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
        
        <br/>
        <input type="text" value ={customer_id}  onChange={(e)=>setCustomer_id(e.target.value)} className="form-control" placeholder="customer_id"/>
     
        <br/>
        <input type="text" value ={email}  onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
    
        <br/>
        <input type="password"value ={password}  onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
      
        <br/>
        <input type="text" value ={address}  onChange={(e)=>setAddress(e.target.value)} className="form-control" placeholder="address"/>
        
        <br/>
        <input type="text" value ={phone}  onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="phone"/>
     
        <br/>
        <button onClick={signup} className="btn btn-primary">SIGN UP</button>
        </div>
    )



}
export default Register