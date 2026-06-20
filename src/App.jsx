import {useState} from 'react'
import password from './hooks/password.js'
import Button from './components/button/index.jsx'
import './App.css'

export default function App(){
  
  const [newPassword, SetnewPassword] = useState('')

  return (
<>

      <div className='container'>
        <Button>
          <button onClick={() => { SetnewPassword(password()) }}>Gerar</button>
          <button onClick={() => { }}>copiar</button>
          <button onClick={() => { SetnewPassword('') }}>limpar</button>
        </Button>

        <div className='box-title'>
          <h3>{newPassword}</h3>
        </div>
      </div>
</> 
  )
}