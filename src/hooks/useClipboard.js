export default function useClipBoard(){

   

    const functionCopie = async ()=>{
        try{
        const title = document.getElementById('title').innerText
        await navigator.clipboard.writeText(title)
        console.log("copiado")
        return true

    }catch(e){
            console.log(e)
            return false
        }

        
    }
    return functionCopie
}