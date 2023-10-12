import React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {register} from '../config/firebase' 


function Register(){
const [email,setEmail]=useState('')
const [passowrd,setPassword]=useState('')


const navigate=useNavigate()

const signup =() => 
register(email,passowrd)






    return ( <div>

        <input onChange={e=>setEmail(e.target.value)}  value={email} type="email" placeholder="enter email"  />
        <input  onChange={e=>setPassword(e.target.value)} value={passowrd} type="password" placeholder="enter passowrd"  />
        <button onClick={signup} >signup</button>

        <p>Already have an account <span  style={{cursor:'pointer'}}  onClick={()=>navigate('/signin') }>Click here</span> </p> 




</div>

 )





}






export default Register
