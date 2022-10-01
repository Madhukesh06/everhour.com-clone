import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({children}) => {
  let auth = useSelector((store) => store.auth.token)

  if(auth){
    return children
  }

  return <Navigate to='/login'/>
}

export default RequireAuth
