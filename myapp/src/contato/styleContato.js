import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    color: #D2D4D1;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Fale = styled.h1`
    color: #D2D4D1;
    @media (max-width: 768px) {
        font-size: 18px;
        margin-right: 40px;
   
    }

`
export const Redes = styled.div`

    display: flex;
    justify-content: space-between;
    width: 200px;
    font-size: 30px;
    margin-left: 50px;
    @media (max-width: 768px) {

        width: auto;
        justify-content: space-evenly;
        margin-left: 0;
    }
`
export const RedesAll = styled.div`
    display: flex;
    flex-direction: column;
`
export const A = styled.a`
    color: #D2D4D1;
    cursor: pointer;

`