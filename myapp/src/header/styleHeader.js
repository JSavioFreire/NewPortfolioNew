import styled from "styled-components";

export const All = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #1B191B;  
    position: absolute;
    top: 0; 
`
export const TopRight = styled.div`
    color: #171517;
    font-weight: 900;
    font-size: 40px;
    position: absolute;
    transform: rotate(90deg) translate(50% , -100%);
    margin-right: -200px;
    top: 0;
    right: 0px;
 
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
        font-size: 28px;
        border-radius: 0 5px 5px 0;
        box-shadow: 0 0 7px #68A0FA, 0 0 15px #5E90E0, 0 0 30px #4E78BA, 0 0 50px #334F7A, 0 0 100px #19263B;
    }

`
export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

`
export const Principal = styled.div`
    width: 600px;
    height: 300px;
`
export const H2 = styled.h2`
    color: white;
    font-family: 'Mulish', sans-serif;

`
export const Box = styled.div`
    width: 400px;
    height: 200px;
    background-color: #5E90E0;
    box-shadow: 0 0 7px #68A0FA, 0 0 15px #5E90E0, 0 0 30px #4E78BA, 0 0 50px #334F7A, 0 0 100px #19263B;
    border-radius: 5px;
`
