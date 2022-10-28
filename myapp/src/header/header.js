import React from 'react'
import { All,TopRight,Menu,ComponentMenu,Principal,Flex,H2,Box } from "./styleHeader"
import Tilt from 'react-vanilla-tilt'

export default function Header(){

    return(
            <All>
                <TopRight >
                    Focus Determination Constancy
                </TopRight>
                <Menu>
                    <Tilt className='tilt'>
                    <ComponentMenu href="#">Sobre Mim</ComponentMenu>
                    </Tilt>
                    <ComponentMenu href="#">Projetos</ComponentMenu>
                    <ComponentMenu href="#">Currículo</ComponentMenu>
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