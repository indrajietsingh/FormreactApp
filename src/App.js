import React,{useState} from 'react';
import Register from "./Register.js"; 
import  Profile from "./Profile.js";
import Login from "./Login.js";
function App() {
  const[currentForm,SetCurrentForm]=useState('register');
  const[state,setState]=useState({
    email:"",
    pass:"",
    name:""
  });
const toggleForm=(formName)=>{
  SetCurrentForm(formName);
}
  return (
    <div className="App">
      {
      currentForm==="login"&&<Login onFormSwitch ={toggleForm}
    state={state} 
    setstate={setState}/>
      } 
       { 
      currentForm==="register"&&<Register onFormSwitch ={toggleForm}
    state={state} 
    setstate={setState}/>
      } 
       {
      currentForm==="profile"&&<Profile onFormSwitch ={toggleForm}
    state={state} 
    setstate={setState}/>
      } 
    </div>
  )
}

export default App;
