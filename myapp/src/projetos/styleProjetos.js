import styled from "styled-components";

export const All = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-bottom: 50px;
`
export const ProjetosPrincipais = styled.div`
    width: 50%;
    height: 300px;

    background-color: gray;
    cursor: grab;
    box-shadow: 0 0 1px #68A0FA, 0 0 3px #5E90E0, 0 0 5px #4E78BA, 0 0 7px #334F7A, 0 0 10px #19263B;
    @media (max-width: 768px) {
        width: 90%;
        height: 250px;
    }
`
export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 60px ;
    @media (max-width: 768px) {
        flex-direction: column;
    }


`
export const SobreProjetos = styled.div`
    width: 40%;
    background-color: #D2D4D1;
    font-family: 'Mulish', sans-serif;
    font-size: 18px;
    color: black;
    border-radius: 3px;
    text-indent: 20px;
    padding: 15px;
    box-shadow: 0 0 7px #68A0FA, 0 0 15px #5E90E0, 0 0 30px #4E78BA, 0 0 50px #334F7A, 0 0 100px #19263B;
    @media (max-width: 768px) {
        width: 80%;
        margin-top: 20px;

    }
`
