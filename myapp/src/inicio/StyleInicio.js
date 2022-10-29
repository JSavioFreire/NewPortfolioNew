import styled, { keyframes } from "styled-components";

const show = keyframes`
    0%{
        font-size: 0px;
    }
    85%{
        font-size: 150px;
    }
    100%{
        font-size: 120px;
    }
`
const see = keyframes`
    0%{
        opacity: 0;
        

    }
   
    100%{
        opacity: 1;

    }
`

const hide = keyframes`
    0%{
        font-size: 120px;
    }
    20%{
        font-size: 100px;
    }
    90%{
        font-size: 2000px;
        opacity: 0;
    }
    100%{
        font-size: 1000px;
        opacity: 0;
    }
    
`
const come = keyframes`
    0%{
        opacity: 0;
        margin-right: -50%;
    }
   
    20%{
        opacity: 1;
        margin-right: 0;
    }
    90%{
        opacity: 1;
        margin-right: 0;
    }
    100%{
        opacity: 0;
    }
`

export const All = styled.div`
    background-color: #1B191B;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`
export const Hi = styled.h1`
    font-size: 120px;
    color: #5E90E0;
    animation: ${show} 1s,  ${hide} 1s 4.2s;
    text-shadow:0 0 2px #68A0FA, 0 0 3px #5E90E0, 0 0 5px #4E78BA, 0 0 10px #334F7A, 0 0 20px #19263B;
    transition: 0.5s;
`
export const About = styled.h3`
    color: #D2D4D1;
    font-size: 30px;
    transition: 2s;
    text-shadow: 2px 2px 5px black;
    opacity: 0;
    margin-right: -50%;
    animation: ${come} 6s 1s;
    
`

export const Div = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    background-color: #1B191B;
    animation: ${see} 2s ;


`
