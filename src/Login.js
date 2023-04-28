import React,{useState}from 'react';
export const Login=(props)=>{
    const [email,setEmail]=useState('');
    const[pass,setPass]=useState('');

const handlesubmit=(e)=>{
e.preventDefault();
if(email ==props.state.email&&pass==props.state.pass)
{
    console.log(true);
    props.onFormSwitch('profile')
}
else{
    console.log(false);
}
}
return(
    <>
    <form>
<label htmlFor='email'>email</label>
<input value={email}onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="you email@gmail.com" name="email"/>
<label htmlFor='password'>password</label>
<input value={pass}onChange={(e)=>setPass(e.target.value)} type="password" id="password" placeholder="********" name="password"/>
<button onClick={handlesubmit}>login</button>
<button onClick={()=>props.onFormSwitch ('register')}>Dont have an account? Register here</button>
    </form>
    </>
);
}
export default Login;