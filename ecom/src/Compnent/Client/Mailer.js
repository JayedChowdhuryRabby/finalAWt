import emailjs from 'emailjs-com'
const Mailer = () =>
{
    function sendMail(e)
    {
        e.preventDefault();

        emailjs.sendForm('service_wuft4s8','template_kse6086',e.target,'F40oUcK1IJEy8TSbD').then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return(
        <div className="container border"
        style={{marginTop:"50px",
        width:"50%",
        backgroundImage:`url('https://t3.ftcdn.net/jpg/04/12/82/16/360_F_412821610_95RpjzPXCE2LiWGVShIUCGJSktkJQh6P.jpg')`
    
    }} > 
            <h1>Contact Form</h1>
            <form className="row" style={{margin: "25px 85px 75px 100px"}}onSubmit={sendMail}>
                <label>name</label>
                <input type="text" name="name"/>
                <label>Email</label>
                <input type="email" name="user-email" className="form-control"/>
                <label>Massage</label>
                <textarea name='massage' rows='4' className="form-control"/>
                <input type ='submit' value='Send' className="form-control" btn btn-primary
                style={{marginTop: "30px"}}
                />

                
            </form>


        </div>
    );
}

export default Mailer;