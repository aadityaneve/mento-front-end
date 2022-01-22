import React,{useContext} from 'react'
import {Navigate,Route} from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';


export const PrivateRoute = ({children}) => {
    const {Token} = useContext(AuthContext);
   if(!Token){
       return <Navigate to={"/"}/>
   }
  return children;
}