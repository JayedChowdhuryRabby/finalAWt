import axios from "axios";
import React, { useEffect, useState } from "react"
function CustomerList()
{
    const [loading, setLoading] = useState(true);
    const [ClientList, setProduct] = useState([]);
    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/CustomerList').then(res=>{
            if(res.data.status === 200)
            {
                //console.log(res.data.products);
                setProduct(res.data.clients);
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
    display_productdata = ClientList.map((item) => 
    {
        return(
            <tr key={item.id}>
                <td>{item.customer_id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
        
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
                                <th>Email</th>
                                <th>Mobile Number</th>
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
export default CustomerList