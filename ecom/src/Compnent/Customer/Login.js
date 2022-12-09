import React, {useState, userEffect} from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";




const Login = ()=>{

    let[token, setToken]= useState("");

    let[email, setEmail] = useState("");

    let[password, setPassword] =useState("");

    const navigate = useNavigate();



    const loginSubmit= ()=>{

        var obj = {email,password};

        alert (obj.email, obj.password);

        axios.post("http://127.0.0.1:8000/api/login",obj)

        .then(resp=>{

            alert (resp.data);

            var token = resp.data;

            console.log(token);

            var user = {userId: token.userid, access_token:token.token};

            localStorage.setItem('user',JSON.stringify(user));

            console.log(localStorage.getItem('user'));

            if (token == "No user found"){

                navigate('/login');

            }else{

                navigate('/register')

            }

        }).catch(err=>{

            console.log(err);

        });




    }

      return (

    <>

    <div className="col-sm-6 offset-sm-3">

   

      <h1 align="center">Login page</h1>

      <div className="col-sm-6 offset-sm-3">

         <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/> <br/>

         <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/> <br/>

         <button onClick={loginSubmit} className="btn btn-primary">Login</button>

      </div>

     

    </div>

    </>

  )

}

export default Login;