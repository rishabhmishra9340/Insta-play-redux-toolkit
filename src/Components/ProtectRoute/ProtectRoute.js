import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Private = ({Component}) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(()=>{
      if(!token){
        navigate('/')
      }
    
    })
 
  return (
    <div>
      <Component/>
    </div>
  )
}
export default Private