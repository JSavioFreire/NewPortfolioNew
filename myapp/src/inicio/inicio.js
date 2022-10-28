import { useState } from "react"
import { useEffect } from "react"
import { Hi,All,About } from "./StyleInicio"

export default function Inicio(){

    const [start, setStart] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setStart(false)
        }, 5000);

       
})




    if(start == true){
        return(
        <All>
            <Hi>
                Olá,
            </Hi>
            <About>
                Bem-vindo ao Portfólio<br/>de Sávio Freire,<br/> Espero que goste!
            </About>
        </All>
        )
    }
    else if(start == false){
        return(
            <div>
                
            </div>
        )
    }
    

}