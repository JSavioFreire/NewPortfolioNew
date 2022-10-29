import Carrousel from "../carrousel/carrousel"
import { All,ProjetosPrincipais,Flex,SobreProjetos } from "./styleProjetos"
import { Title } from "../sobre/styleSobre"
import owfoto from '../img/projetos/projetoow.png'
import supremo from '../img/projetos/supremo.png'
import savio from '../img/projetos/savio.png'
import bet from '../img/projetos/bet.png'
import map from '../img/projetos/map.png'

export default function Projetos(){


    return(
        <All id="projeto">
            <Title>Meu Projetos</Title>

        <Flex>
            
            <ProjetosPrincipais data-aos="zoom-in-right">
                <Carrousel foto1={owfoto} foto2={supremo} foto3={bet} foto4={map} foto5={savio} />
            </ProjetosPrincipais>
                <SobreProjetos data-aos="zoom-in-left">
                    Tenho muita experiência com projetos pessoais, gosto muito de me aventurar no desenvolvimento sempre criando coisas novas. Tenho experiência em <strong>React</strong>, <strong>React Native</strong>, <strong>JavaScript</strong>, <strong>Styled-components</strong>, <strong>BootStrap</strong>, <strong>CSS</strong>, <strong>HTML</strong> e projetos <strong>Responsivos</strong>. Já fiz alguns trabalho como <strong>Freelancer</strong> pelo <strong>Workana</strong>.<br/>Estudo Análise e Desenvolvimento de Sistemas pela Universidade Estacio de Sá.
                </SobreProjetos>
        </Flex>

            
        </All>
    )
    }