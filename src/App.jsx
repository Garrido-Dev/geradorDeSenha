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
          <button onClick={() => { }}>Copiar</button>
          <button onClick={() => { SetnewPassword('') }}>Limpar</button>
        </Button>

        <div className='box-title'>
          <h2>{newPassword}</h2>
        </div>
      </div>
</> 
  )
}