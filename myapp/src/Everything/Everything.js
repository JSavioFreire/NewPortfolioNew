import React from 'react'
import { All } from "./styleEverything"

import Header from '../header/header';
import Sobre from '../sobre/sobre';
import Projetos from '../projetos/projetos';
import Contato from '../contato/contato';

export default function Everything(){

    return(
            <All>
                <Header/>
                <Sobre/>
                <Projetos/>
                <Contato/>
            </All>   
    
    )
}