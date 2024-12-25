import React, { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
 import {FormInput, SubmitBtn} from '../components';
 import { Link, useNavigate} from 'react-router-dom';
 import { auth } from "../components/Firebase";
 import { Form } from "react-router-dom";


const handleRegister = async(e)=>{
  const navigate = useNavigate();
  e.preventDefault();
  try{
    await createUserWithEmailAndPassword(auth,username, email, password)
    const user = auth.currentUser;
    console.log(user);
    console.log("User Registered Successfully!!")
    navigate("/");
  }catch(error){
    console.log(error.message);
  }
};

function Register () {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <section className='h-screen grid place-items-center'>
        <Form method='POST' onSubmit={handleRegister}  className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 xs:w-60'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' value={username} label='Username' className="form-control" name='username' onChange={(e)=>setUsername(e.target.value)} required/> 
        <FormInput type='email' value={email} label='Email' name='email' onChange={(e)=>setEmail(e.target.value)} required/>
        <FormInput type='password' value={password} label='Password' name='password' onChange={(e)=>setPassword(e.target.value)} required/>
        <div className='mt-4'>
          <SubmitBtn type="submit" value="Register"/>
        </div>
        <p className='text-center'>
          Already a member?
          <Link
            to='/login'
            className='ml-2 link link-hover link-primary capitalize'
          >
            login
          </Link>
        </p>
        </Form>
    </section>
  )
}

export default Register;


