import styled from "styled-components";

export const BtMenu = styled.div`
    color: #68A0FA;
    display: none;
    z-index: 2;

    @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 20px;
    right: 40px;       
    }
`

export const MenuMo = styled.div`
    background-color: #1f191f;
    top: 0;
    transition: 0.5s;
    right: -60%;
    position: fixed;
    height: 100%;
    width: 50%;
    z-index: 1;
    border-left: 1px solid #68A0FA;
    box-shadow: 0 0 2px #68A0FA, 0 0 5px #5E90E0, 0 0 10px #4E78BA, 0 0 20px #334F7A, 0 0 30px #19263B;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

`
export const Menu = styled.div`
    width: 200px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 80px;

   
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
export const Redes = styled.div`
    width: 50%;
    
`