//  import { Link, useNavigate } from 'react-router-dom';
//  import { useState } from 'react';
//  import { signInWithEmailAndPassword } from "firebase/auth";
//  import { auth } from "../components/Firebase";
//  import { FormInput } from '../components';
// import { Form } from 'react-router-dom';
// import SubmitBtn from '../components/SubmitBtn';

// const handleLogin = async(e)=>{
//   const navigate = useNavigate();
//   e.preventDefault();
//   try{
//     await signInWithEmailAndPassword(auth, email, password)
//     const user = auth.currentUser;
//     console.log(user);
//     console.log("User Login Successfully!!")
//     navigate("/");
//   }catch(error){
//     console.log(error.message);
//   }
// };

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <section className='h-screen grid place-items-center'>
//       <Form onSubmit={handleLogin}
//         method='post'
//         className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
//       >
//         <h4 className='text-center text-3xl font-bold'>Login</h4>
//         <FormInput
//           type='email'
//           label='email'
//           name='identifier'
//           defaultValue='test@test.com'
//           value = {email}
//           onChange={(e)=>setEmail(e.target.value)}
//         />
//         <FormInput
//           type='password'
//           label='password'
//           name='password'
//           defaultValue='secret'
//           value={password}
//           onChange={(e)=>setPassword(e.target.value)}
//         />
//         <div className='mt-4'>
//           <SubmitBtn type="submit" value="Login" />
//         </div>
        
//         <p className='text-center'>
//           Not a member yet?
//           <Link
//             to='/register'
//             className='ml-2 link link-hover link-primary capitalize'
//           >
//             register
//           </Link>
//         </p>
//       </Form>
//     </section>
//   );
// };
// export default Login;

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/Firebase";
import { FormInput } from '../components';
import { Form } from 'react-router-dom';
import SubmitBtn from '../components/SubmitBtn';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Move this outside of handleLogin

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      console.log("User Login Successfully!!");
      navigate("/"); // Use navigate here
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className='h-screen grid place-items-center'>
      <Form
        onSubmit={handleLogin}
        method='post'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput
          type='email'
          label='email'
          name='identifier'
          defaultValue='test@test.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          defaultValue='secret'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='mt-4'>
          <SubmitBtn type="submit" value="Login" />
        </div>
        <p className='text-center'>
          Not a member yet?
          <Link
            to='/register'
            className='ml-2 link link-hover link-primary capitalize'
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
