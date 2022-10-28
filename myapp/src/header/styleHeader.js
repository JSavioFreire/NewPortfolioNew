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
        background-color: #6473E0;
        color: black;
        text-shadow: none;
        font-size: 28px;
        border: 1px solid #2C3261;
        border-radius: 0 20px 20px 0;
        box-shadow: 2px 2px 5px black;
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
export const Box = styled.h2`
    color: white;
    font-family: 'Mulish', sans-serif;

`