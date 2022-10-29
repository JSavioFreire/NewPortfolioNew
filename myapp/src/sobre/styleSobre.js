import { keyframes } from "styled-components";
import styled from "styled-components";

const Girar = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg) ;
    }   
`

export const SobreDiv = styled.div`
    width: 100%;
    background-color: #1B191B;
    padding-top: 60px;
    overflow: hidden;
`
export const Foto = styled.img`
    width: 220px;
    box-shadow: 0 0 1px #68A0FA, 0 0 3px #5E90E0, 0 0 5px #4E78BA, 0 0 7px #334F7A, 0 0 10px #19263B;
    position: relative;
    &:hover{
        box-shadow: 0 0 10px #68A0FA, 0 0 18px #5E90E0, 0 0 33px #4E78BA, 0 0 50px #334F7A, 0 0 100px #19263B;
        transition: 2s;
        
    }
`
export const Flex = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    margin: 60px auto;

`
export const TextSobre = styled.p`
    width: 600px;
    background-color: #68A0FA;
    font-family: 'Mulish', sans-serif;
    font-size: 18px;
    color: black;
    border-radius: 10px;
    text-indent: 20px;
    padding: 15px;
    box-shadow: 0 0 7px #68A0FA, 0 0 15px #5E90E0, 0 0 30px #4E78BA, 0 0 50px #334F7A, 0 0 100px #19263B;
`
export const Hab = styled.div`
    width: 100px;
    height: 100px;
    background-color: black;
    border-radius: 50%;
    margin-top: 20px;
    margin-bottom: 60px ;
    display: flex;
    transition: 1s;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    box-shadow: 0 0 7px #68A0FA, 0 0 15px #5E90E0, 0 0 30px #4E78BA, 0 0 50px #334F7A, 0 0 100px #19263B;
        &:hover{
            animation: ${Girar} 0.5s;
    }
`
export const Title = styled.h2`
    display: flex;
    justify-content: center;
    color: #D2D4D1;
    font-size: 30px;
    margin-top: 0px;
`