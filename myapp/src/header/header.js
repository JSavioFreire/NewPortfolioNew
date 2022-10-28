import { Container } from "react-bootstrap"
import { All,TopRight,Menu,ComponentMenu,Principal,Flex,Box } from "./styleHeader"

export default function Header(){

    return(
            <All>
                <TopRight>
                    Focus Determination Constancy
                </TopRight>
                <Menu>
                    <ComponentMenu href="#">Sobre Mim</ComponentMenu>
                    <ComponentMenu href="#">Projetos</ComponentMenu>
                    <ComponentMenu href="#">Currículo</ComponentMenu>
                </Menu>
                <Flex>
                    <Principal>
                        <Box>
                            O Meu Sonho...
                        </Box>
                    </Principal>
                </Flex>
            </All>   
    
    )
}