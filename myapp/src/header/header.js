import { TopRight,Menu,ComponentMenu,Principal,Flex,H2,H1,Box,Led,LedRight,LedTop,TopLeft,Rocket,Icon} from "./styleHeader";
import Tilt from 'react-parallax-tilt';
import { IoIosArrowDown } from 'react-icons/io';
import curriculo from '../img/curriculo.pdf'


import rocket from '../img/rocket.gif'

export default function Header(){
    
  setInterval(() => {
    let altura = window.pageYOffset;

    const menu = []
        menu[1] = document.querySelector('.menu')
        menu[2] = document.querySelector('.menu2')
        menu[3] = document.querySelector('.menu3')

    const arrow = document.querySelector('.arrow')

    if(altura < 200){
        menu.forEach(el => {
            el.style.fontSize = '27px';
        });
        arrow.style.opacity=1
        
    }else if(altura >=200) {
        menu.forEach(el => {
            el.style.fontSize = '19px';
        });
        arrow.style.opacity=0
    }

  }, 0);
     

   


    return(
        <div >
            <TopLeft href="#">
                    SF
            </TopLeft>
            <TopRight >
                Focus Determination Constancy Faith
            </TopRight>
            <Menu>
                <Tilt >
                <ComponentMenu href="#sobre" className="menu" >Sobre Mim</ComponentMenu>
                </Tilt>
                <Tilt >
                <ComponentMenu href="#projeto" className="menu2">Projetos</ComponentMenu>
                </Tilt>
                <Tilt >
                <ComponentMenu href={curriculo} download className="menu3">Currículo</ComponentMenu>
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
                    
                </Principal>
            </Flex>
            <Led/>
            <LedRight/>
            <LedTop/>
            <Icon className="arrow">
                <IoIosArrowDown/>
            </Icon>
        </div>
    )
}