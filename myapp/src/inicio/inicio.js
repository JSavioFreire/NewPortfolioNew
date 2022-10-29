import { useState } from "react"
import { useEffect } from "react"
import { Hi,All,About } from "./styleInicio"



import Everything from "../Everything/Everything"

export default function Inicio(){

    const [start, setStart] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setStart(false)
        }, 5000);

       
})

const [see, setSee] = useState(false)


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
        if(see == false){
            setTimeout(() => {
                setSee(true)
            }, 1000)
        return(
            <All>

            </All>
        ) }
            else if(see == true){
                return(
                    <div>
                        <Everything/>
                    </div>
            )
            }
            
       


        
    }
    

}