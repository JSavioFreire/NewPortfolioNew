import React from 'react'
import { All } from "./styleEverything"

import Header from '../header/header';
import Sobre from '../sobre/sobre';
import Projetos from '../projetos/projetos';
import Contato from '../contato/contato';
import MenuMobile from '../menuMobile/menuMobile';

export default function Everything(){

    return(
            <All>
                <MenuMobile/>
                <Header/>
                <Sobre/>
                <Projetos/>
                <Contato/>
            </All>   
    
    )
}