import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar';
export default function Signup() {
       const [credentials,setcredentials]= useState({name:"",email:"",password:"",geolocation:""})



    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password, location:credentials.geolocation})
        });
        const json =await response.json()
        console.log(json);
        if(!json.success){
            alert("Enter Valid Credentials")
        }
    }

    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
        <div>
      .
      </div>

    <div className='container'>
      <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label"style={{ color: 'white' }}>Name</label>
    <input type="text" className="form-control" id= "name" name='name' value = {credentials.name} onChange={onChange} />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: 'white' }}>Email address</label>
    <input type="email" className="form-control" name='email' value = {credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'white' }}>Password</label>
    <input type="password" className="form-control" name='password' value = {credentials.password} onChange={onChange} id="exampleInputPassword"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'white' }}>Address</label>
    <input type="text" className="form-control" name='geolocation' value = {credentials.geolocation} onChange={onChange} id="exampleInputPassword2"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
  

  <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
</form>
</div>
    </div>
  )
}
