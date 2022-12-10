import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import swal from "sweetalert";


function ProductList()
{
    const [loading, setLoading] = useState(true);
    const [ProductList, setProduct] = useState([]);
    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/ProductList').then(res=>{
            if(res.data.status === 200)
            {
                //console.log(res.data.products);
                setProduct(res.data.products);
                setLoading(false);
            }

    });
}, []);



var display_productdata = " ";
if(loading)
{

    return <h4> view product loading</h4>

}
else{
    display_productdata = ProductList.map((item) => 
    {
        return(
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.image}</td>
                <td><Link to="addtocart" className="btn btn-success btn-sm">Add To Cart</Link> </td>
               
            </tr>
        )

    });


}

    return(
        <div className="card px-4 mt-3">
            <div className="card-header">
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-boardered table-striped">
                        <thead>
                            <tr >
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                            </tr>

                        </thead>
                    
                        <tbody>
                            {display_productdata}
                        </tbody>
                        
                    </table>
                    
                </div>

            </div>
            
        </div>
    )

}
export default  ProductList