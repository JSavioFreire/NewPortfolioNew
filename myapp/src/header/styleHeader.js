import styled, { keyframes } from "styled-components";


const Girar = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg) ;
    }
    
`
const see = keyframes`
    0%{
        opacity: 0;
        font-size: 5px;
    }
   
    100%{
        opacity: 1;
        font-size: 24px;
    }
`
const jump = keyframes`
    0%,100%{
        bottom: 0;
    }
    50%{
        bottom: 15px;
        font-size: 40px;
    }
`
export const Icon = styled.div`
    color: white;
    top: 90vh;
    height: 20px;
    left: 50%;
    transform: translate(-50%);
    font-size: 20px;
    position: absolute;
    animation: ${jump} 1s infinite;
    transition: 1s;
    

`

export const All = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1B191B;  
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0; 
    overflow-x: hidden;
    opacity: 1;
    transition: 1s;
    flex-direction: column;
    
`
export const TopRight = styled.div`
    color: #171517;
    font-weight: 900;
    font-size: 30px;
    position: absolute;
    transform: rotate(90deg) translate(50% , -100%);
    margin-right: -200px;
    top: 0;
    right: 0px;
    transition: 5s;
    cursor: default;
    @media (max-width: 768px) {
    font-size: 18px;
        
    }
    &:hover{
        text-shadow: 0 0 2px #68A0FA, 0 0 4px #5E90E0, 0 0 6px #4E78BA, 0 0 8px #334F7A, 0 0 10px #19263B;
    }
 
`
export const Menu = styled.div`
    width: 200px;
    height: 180px;
    position: absolute;
    bottom: 40px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: fixed;

    @media (max-width: 768px) {
        display: none;
   
    }
`
export const ComponentMenu = styled.a`
    text-decoration: none;
    color: #D2D4D1;
    font-family: 'Oswald', sans-serif;
    font-size: 25px;
    text-shadow: 2px 2px 5px black;
    transition: 0.5s;
    padding-left: 40px;
    
    &:hover{
        background-color: #5E90E0;
        color: black;
        text-shadow: none;
        border-radius: 0 5px 5px 0;
        box-shadow: 0 0 7px #68A0FA, 0 0 15px #5E90E0, 0 0 30px #4E78BA, 0 0 50px #334F7A, 0 0 100px #19263B;
        padding-right: 20px;
    }

`
export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

`
export const Principal = styled.div`
    height: 300px;
    display: flex;
    align-items: left;
    flex-direction: column;

`
export const H2 = styled.h2`
    color: #D2D4D1;
    font-size: 24px;
    font-family: 'Mulish', sans-serif;
    animation: ${see} 1s;
    @media (max-width: 768px) {
        font-size: 18px;
  }

`
export const H1 = styled.h1`
    color: #D2D4D1;
    font-family: 'Mulish', sans-serif;
    font-size: 40px;
  
    margin-right: 20px;
    @media (max-width: 768px) {
        font-size: 35px;
        margin-left: 30px;
  }

`
export const Box = styled.div`

    background-color: #5E90E0;
    box-shadow: 0 0 7px #68A0FA, 0 0 15px #5E90E0, 0 0 30px #4E78BA, 0 0 50px #334F7A, 0 0 100px #19263B;
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    @media (max-width: 768px) {
        padding: 5px 10px;
        width: 70%;
        margin: 0 auto;
        align-items: center;
   
    }

`
export const P = styled.p`
    color: white;
`
export const Led = styled.div`
    background-color: #68A0FA;
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -1px;
    box-shadow: 0 0 10px #68A0FA, 0 0 15px #5E90E0, 0 0 30px #4E78BA, 0 0 50px #334F7A, 0 0 100px #19263B;
`
export const LedRight = styled.div`
    background-color: #68A0FA;
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    right: -1px;
    box-shadow: 0 0 10px #68A0FA, 0 0 15px #5E90E0, 0 0 30px #4E78BA, 0 0 50px #334F7A, 0 0 100px #19263B;
`
export const LedTop = styled.div`
    background-color: #68A0FA;
    width: 100%;
    height: 1px;
    position: absolute;
    top: -1px;
    left: 0;
    box-shadow: 0 0 10px #68A0FA, 0 0 15px #5E90E0, 0 0 30px #4E78BA, 0 0 50px #334F7A, 0 0 100px #19263B;
`
export const TopLeft =styled.a`
    text-shadow: 0 0 2px #68A0FA, 0 0 4px #5E90E0, 0 0 6px #4E78BA, 0 0 8px #334F7A, 0 0 10px #19263B;
    color: #D2D4D1;
    position: fixed;
    top: 20px;
    left: 20px;
    font-family: 'Bebas Neue', cursive;
    font-size: 64px;
    width: 120px;
    height: 120px;
    align-items: center;
    display: flex;
    justify-content: center;
    transform: rotate(360deg);
    cursor: pointer;
    text-decoration: none;

    &:hover{
        animation: ${Girar} 0.5s;
    }
    @media (max-width: 768px) {
        display: none;
   
    }


   
`


export const Rocket = styled.img`
    width: 70px;
    @media (max-width: 768px) {
        height: 80px;
   
    }
    


`

