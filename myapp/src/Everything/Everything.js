import React from 'react'
import { All } from "./styleEverything"


import Header from '../header/header';
import Sobre from '../sobre/sobre';

export default function Everything(){

    return(
            <All>
                <Header/>
                <Sobre/>
            </All>   
    
    )
}