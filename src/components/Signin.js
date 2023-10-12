import React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {login} from '../config/firebase' 


function Signin(){
const [email,setEmail]=useState('')
const [passowrd,setPassword]=useState('')


const navigate=useNavigate()

const signin =() => 
login(email,passowrd)






    return ( <div>

        <input onChange={e=>setEmail(e.target.value)}  value={email} type="email" placeholder="enter email"  />
        <input  onChange={e=>setPassword(e.target.value)} value={passowrd} type="password" placeholder="enter passowrd"  />
        <button onClick={signin} >signin</button>

        <p>dont have an account <span style={{cursor:'pointer'}}  onClick={()=>navigate('/register') }>Click here</span> </p> 
</div>)
}






export default Signin
