import React from 'react'
import { All,TopRight,Menu,ComponentMenu,Principal,Flex,H2,H1,Box,Led,LedRight,LedTop,TopLeft,Rocket} from "./styleHeader"
import Tilt from 'react-parallax-tilt'

import rocket from '../img/rocket.gif'

export default function Header(){

    return(
            <All>
                <TopLeft>
                    SF
                </TopLeft>
                <TopRight >
                    Focus Determination Constancy Faith
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
                        <H1>Sávio Freire</H1>
                        <Tilt>
                            <Box>
                                <H2>
                                    Desenvolvendo Soluções para chegar cada vez mais longe!
                                </H2>
                                <Rocket src={rocket}/>
                            </Box>
                        </Tilt>
                        <Tilt>
                            
                        </Tilt>
                    </Principal>
                </Flex>
                <Led/>
                <LedRight/>
                <LedTop/>
            </All>   
    
    )
}