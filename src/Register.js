import { getDefaultNormalizer } from '@testing-library/react';
import React,{useState}from 'react';
export const Register=(props)=>{
    const [email,setEmail]=useState('');
    const[name, setName]=useState('');
    const[pass,setPass]=useState('');
    const onchange=()=>{
console.log('name',name);
console.log('email',email);
console.log('pass',pass);
props.setstate({name:name, email:email, pass:pass});
}
return(
    <>
    <form>
<label htmlFor="email">email</label>
<input value={email}onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="you email@gmail.com" name="email"/>
<label htmlFor="name">FullName</label>
<input value={name}onChange={(e)=>setName(e.target.value)} type="name" id="name" placeholder="FullName" name="FullName"/>
<label htmlFor="password">Password</label>
<input value={pass} onChange={(e)=>setPass(e.target.value)}type="password" id="password" placeholder='********'/>
</form>
<button onClick={onchange}>Register</button>
<button onClick={()=>props.onFormSwitch('login')}>Already have an account?</button>
    
    </>
)
}
export default Register;