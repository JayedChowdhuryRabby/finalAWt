import React,{useState} from "react";
import{useNavigate} from 'react-router-dom'
import axios from "axios";
import swal from "sweetalert";
function AddProduct()
{
    const [name, setName]=useState("");
    const [price, setPrice]=useState("");
    const [image, setImage]=useState("");

    const history=useNavigate();

    async function submit()
    {
        
        let item={name,price,image}
        console.warn(item)

           axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('http://127.0.0.1:8000/api/product',item).then(res =>{
            if(res.status === 200)
            {
               // localStorage.setItem('auth_token',res.token);
               // localStorage.setItem('auth_name',res.username);
                swal("Suceessfully Added", {
                    icon: "success",
                  });
                history('/dashboard');

            }
            else 
            {
                history('/addproduct');
            }
        });
    });

       
      
    }
    return(
        
        <div className="col-sm-6 offset-sm-3">
        <br/>
        <input type="text"  value ={name}  onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
        
        <br/>
        <input type="text"  value ={price}  onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="price"/>
        
        <br/>
        <input type="file"  value ={image}  onChange={(e)=>setImage(e.target.value)} className="form-control" placeholder="image"/>
        
        <br/>
       
       
        <button onClick={submit} className="btn btn-primary">Submit</button>
        </div>
    )



}
export default AddProduct