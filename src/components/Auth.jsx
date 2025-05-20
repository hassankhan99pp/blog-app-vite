import React from 'react'
import { Outlet ,Navigate } from 'react-router-dom'
export default function Auth({allowedRole}) {
  
  let token = localStorage.getItem('token')
  let role = localStorage.getItem('role')

  return (
    <>
      {/* { 
        if(token){
          if(role == 'admin'){
              <Outlet></Outlet>
          }
          else{
            <Navigate to='unauthorized' ></Navigate>

          }
        }
        else{
          <Navigate to='login' ></Navigate>
        }
      } */}

      {token ? (
        role == allowedRole? (
          <Outlet />
        ) : (
          <Navigate to={"/unauthorized"} />
        )
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
}
