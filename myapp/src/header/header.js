import React from 'react'
import { All,TopRight,Menu,ComponentMenu,Principal,Flex,H2,Box,Led,LedRight,LedTop,TopLeft} from "./styleHeader"
import Tilt from 'react-parallax-tilt'

export default function Header(){

    return(
            <All>
                <TopLeft>
                    SF
                </TopLeft>
                <TopRight >
                    Focus Determination Constancy
                </TopRight>
                <Menu>
                    <Tilt >
                    <ComponentMenu href="#" >Sobre Mim</ComponentMenu>
                    </Tilt>
                    <Tilt >
                    <ComponentMenu href="#" >Projetos</ComponentMenu>
                    </Tilt>
                    <Tilt >
                    <ComponentMenu href="#" >Currículo</ComponentMenu>
                    </Tilt>
                </Menu>
                
                <Flex>
                    <Principal>
                        <H2>
                            Desenvolvendo Soluções para chegar cada vez mais longe!
                        </H2>
                    </Principal>
                </Flex>
                <Led/>
                <LedRight/>
                <LedTop/>
            </All>   
    
    )
}