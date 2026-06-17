import {useState} from 'react'
import password from './hooks/password'


export default function App(){
  
  const senha = password()

  return (


    <h1>{senha}</h1>
  )
}