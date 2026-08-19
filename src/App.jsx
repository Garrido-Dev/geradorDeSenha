import {useState} from 'react'
import password from './hooks/password.js'
import Button from './components/button/index.jsx'
import './App.css'
import useClipBoard from './hooks/useClipboard.js'
import Input from './components/input/index.jsx'

export default function App(){
  
  const [newPassword, SetnewPassword] = useState()
  const [btnText, setBtnText] = useState('Copiar')
  const [customSize, setCustomSize] = useState()
  const [showInput, setShowInput] = useState(false)

  const passWordSize = showInput ? customSize : 12

  const copiarTexto = useClipBoard()

  const handleCopy = async ()=>{  
    const sucesso = copiarTexto()

    if(sucesso){
      setBtnText('Copiado! ✅')
    }

    setTimeout(() => {
      setBtnText('Copiar')
    }, 2000);
    
}


  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Gerador de Senha </h1>
        </div>

        <div>
          <label htmlFor="showInput">Customizar tamanho:</label>
          <input 
          type="checkbox" 
          id="showInput" 
          value={showInput} 
          onChange={()=>setShowInput(currentState => !currentState)}
          />
        </div>
        <div>
          {showInput ? (<Input value={customSize} setPassWordSize={setCustomSize}></Input>) : null}
          
          </div>
        

        <Button>
          <button
            onClick={() => {
              SetnewPassword(password(passWordSize));
            }}
          >
            Gerar senha de {passWordSize} caracteres!
          </button>
          <button
            onClick={() => {
              handleCopy();
            }}
          >
            {btnText}
          </button>
          <button
            onClick={() => {
              SetnewPassword("");
            }}
          >
            Limpar
          </button>
        </Button>

        <div className="box-title">
          <h2 id="title">{newPassword}</h2>
        </div>
      </div>
    </>
  );
}