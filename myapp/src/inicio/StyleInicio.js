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
const showMobile = keyframes`
    0%{
        font-size: 0px;
    }
    85%{
        font-size: 120px;
    }
    100%{
        font-size: 86px;
    }
`
const hideMobile = keyframes`
    0%{
        font-size: 86px;    
    }
    20%{
        font-size: 70px;
    }

    100%{
        font-size: 500px;
        opacity: 0;
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
        font-size: 1500px;
        opacity: 0;
    }
    100%{
        font-size: 500px;
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
    overflow: hidden;
    width: 100%;
    height: 100vh;
`
export const Hi = styled.h1`
    font-size: 120px;
    color: #5E90E0;
    animation: ${show} 1s,  ${hide} 1s 4.2s;
    text-shadow:0 0 2px #68A0FA, 0 0 3px #5E90E0, 0 0 5px #4E78BA, 0 0 10px #334F7A, 0 0 20px #19263B;
    transition: 0.5s;
    @media (max-width: 768px) {
            font-size: 86px;
            animation: ${showMobile} 1s,  ${hideMobile} 1s 4.2s;
        }
`
export const About = styled.h3`
    color: #D2D4D1;
    font-size: 30px;
    transition: 2s;
    text-shadow: 2px 2px 5px black;
    opacity: 0;
    margin-right: -50%;
    animation: ${come} 6s 1s;
        @media (max-width: 768px) {
            font-size: 20px;
        }
`
    




