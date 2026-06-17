import {useState} from 'react'

export default function password(){
    const fullPassword = []
    const number = Math.floor(Math.random()*10)
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const randomAlphabet = alphabet[Math.floor(Math.random()*alphabet.length)] 
    
    for(let i = 0; i<8;i++ ){
        const item = Math.floor(Math.random()*2)
        
    }
}