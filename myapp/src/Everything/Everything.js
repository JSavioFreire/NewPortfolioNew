import React from 'react'
import { All } from "./styleEverything"


import Header from '../header/header';
import Sobre from '../sobre/sobre';
import Projetos from '../projetos/projetos.js'

export default function Everything(){

    return(
            <All>
                <Header/>
                <Sobre/>
                <Projetos/>
            </All>   
    
    )
}