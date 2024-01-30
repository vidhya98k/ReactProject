import React from 'react';
import './App.css';
import {useState} from "react";


function App(){
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [LoggedIn,setLoggedIn]=useState(false);
  const[error,setError]=useState("");

  const handleSubmit = e=>{ 
    e.preventDefault();
    setError("");
    try{
      if(username === "jerry" && password === "Tom"){
        setLoggedIn(true);
      }
      else{
        throw Error;
      }
      setPassword("");
    }
    catch(error){
      setError("incorrect username or password");
      setUsername("");
      setPassword("");
    }
  } 
 return(
    <>
    <h1 className='text-center text-3xl font-semibold
     mt-2 py-4'>UseReducer</h1>
     <div className='flex flex-col items-center gap-4'>
        { LoggedIn ?(
          <>
          <div>
            <h2 className='text-center text-3xl mt-4 py-2'>Welcome {username}!</h2>
            <button className='bg-blue-600 text-white
             text-lg font-medium rounded-lg py-1 px-3'
             onClick={()=>setLoggedIn(false)}
             >Log Out</button>
          </div>
          </>
        ):(
          <form className='flex flex-col items-center justify-center gap-4 mt-4 py-2' onSubmit={handleSubmit}>
          <input className='border rounded-lg px-2 py-1'
           type='text'
           autoComplete='username'
           placeholder='username'
           value={username}
           onChange={(e)=>setUsername(e.target.value)} 
          /><br/>
          <input  className='border rounded-lg px-2 py-1'
           type='password'
           autoComplete='current-password'
           placeholder='password'
           value={password}
           onChange={(e)=>setPassword(e.target.value)} 
          />
          <button className='bg-blue-600 text-white 
          text-lg font-medium rounded-lg py-1 px-3 '
           type='submit'>Log In</button>
           <p className='text-red-500 text-center'>{error}</p>
        </form>
        )}

    </div>
    </>
  );
}

export default App;
