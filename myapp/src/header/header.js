import React from 'react'
import { All,TopRight,Menu,ComponentMenu,Principal,Flex,H2,Box } from "./styleHeader"
import Tilt from 'react-parallax-tilt'

export default function Header(){

    return(
            <All>
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
                            O Meu Sonho...
                        </H2>
                        
                        <Box>
                        
                        </Box>
                        
                    </Principal>
                </Flex>
            </All>   
    
    )
}