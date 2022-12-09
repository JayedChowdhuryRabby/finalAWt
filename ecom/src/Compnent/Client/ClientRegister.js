import React,{useState} from "react";
import{useNavigate} from 'react-router-dom'
import axios from "axios";
import swal from "sweetalert";
function Register()
{
    const [name, setName]=useState("");
    const [client_id, setClient_id]=useState("");
    const [email, setEmail]=useState("");
    const [shopname, setShopname]=useState("");
    const [password, setPassword]=useState("");
    const [address, setAddress]=useState("");
    const [mobileNumber, setmobileNumber]=useState("");
    const history=useNavigate();

    async function signup()
    {
        
        let item={name,client_id,email,shopname,password,address,mobileNumber}
        console.warn(item)

           axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('http://127.0.0.1:8000/api/clientregister',item).then(res =>{
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
        <input type="text"  value ={shopname}  onChange={(e)=>setShopname(e.target.value)} className="form-control" placeholder="shopname"/>
        
        <br/>
       
        <input type="text" value ={email}  onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
    
        <br/>
        <input type="text" value ={address}  onChange={(e)=>setAddress(e.target.value)} className="form-control" placeholder="address"/>
        
        <br/>
       
      
     
        <input type="text" value ={mobileNumber}  onChange={(e)=>setmobileNumber(e.target.value)} className="form-control" placeholder="mobileNumber"/>
     
        <br/>
        <input type="password"value ={password}  onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
      
      <br/>
        <button onClick={signup} className="btn btn-primary">SIGN UP</button>
        </div>
    )



}
export default Register