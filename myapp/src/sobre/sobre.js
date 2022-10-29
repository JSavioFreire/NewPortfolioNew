import { SobreDiv,Foto,Flex,TextSobre,Hab,Title } from "./styleSobre"
import foto from '../img/fotominha.jpg'
import fotopretoebranco from '../img/fotominhapretoebranco.jpg'
import Tilt from 'react-parallax-tilt'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useState } from "react";

import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaCss3Alt } from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { AiFillHtml5 } from 'react-icons/ai';




export default function Sobre(){

    useEffect(()=>{
        AOS.init({duration: 1000});
    },[])
    
    const [change, setChange] = useState(false)

    useEffect(()=>{
        const localFoto = document.querySelector('.fot')
        localFoto.addEventListener('mouseenter',()=>{
            setChange(true)
            localFoto.addEventListener('mouseleave', ()=>{
                setChange(false)
            })
        })

    })


    return(
        <SobreDiv id="sobre">
            <Flex>
                <Foto className="fot" data-aos="zoom-in-right" src={change? foto : fotopretoebranco} /> 
                <Tilt>
                    <TextSobre data-aos="fade-up-left">
                        Meu nome é Sávio Freire, tenho 23 anos, sou casado e sou um amante de tecnologia. Gosto muito de me desafiar, e como um nerdola nato, sempre gostei de quebra-cabeças e jogo difíceis, acredito que seja por isso que me apaixonei pela programação; Como em um game por exemplo, são nas áreas mais complicadas e desafiadoras que encontramos as maiores recompensas, e pra mim, nada é mais recompensador do que ver o meu site bonitão, meu código lindo e tudo funcionando corretamente.
                    </TextSobre>
                </Tilt>
            </Flex>

        <Title>
            Minha Habilidades
        </Title>

            <Flex>
                <Tilt>
                    <Hab>
                        <FaReact style={{color:'#5CCFEE'}}/>
                    </Hab>
                </Tilt>
                <Tilt>
                    <Hab>
                        <TbBrandReactNative style={{color:'#5CCFEE'}}/>
                    </Hab>
                </Tilt>
                <Hab>
                    <IoLogoJavascript style={{color:'#EAD41C'}}/>
                </Hab>

                <Hab>
                    <SiStyledcomponents style={{color:'#C97FB3'}}/>
                </Hab>

                <Hab>
                    <FaBootstrap style={{color:'#523A76'}}/>
                </Hab>

                <Hab>
                    <FaCss3Alt style={{color:'#2449D8'}}/>
                </Hab>

                <Hab>
                    <AiFillHtml5 style={{color:'#FF5722'}}/>
                </Hab>
                
            </Flex>
        </SobreDiv>
    )
}