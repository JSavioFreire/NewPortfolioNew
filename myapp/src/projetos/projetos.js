import Carrousel from "../carrousel/carrousel"
import { All,ProjetosPrincipais } from "./styleProjetos"
import { Title } from "../sobre/styleSobre"

export default function Projetos(){

    return(
        <All>
            <Title>Meu Projetos</Title>

            <ProjetosPrincipais data-aos="zoom-in-right">
                <Carrousel/>
            </ProjetosPrincipais>
        

            
        </All>
    )
}