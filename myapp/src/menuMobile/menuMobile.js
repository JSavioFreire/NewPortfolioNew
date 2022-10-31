import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { BtMenu,MenuMo,Menu, ComponentMenu } from './styleMenuMobile'
import { A, Redes,RedesAll } from '../contato/styleContato';

import { AiFillLinkedin,AiFillInstagram,AiFillGithub } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

import Tilt from 'react-parallax-tilt';
import curriculo from '../img/curriculo.pdf'


import './style.css'

export default function MenuMobile(){

    const [isOpen, setOpen] = useState(false)

    return(
        <>
            <BtMenu>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
                
            </BtMenu>
            <MenuMo className={isOpen? 'aparecer' : ''}>
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
                <RedesAll>
                    <Redes>
                        <A href="https://github.com/JSavioFreire" target='_blank'>
                            <AiFillGithub/>
                        </A>
                        <A href="https://www.linkedin.com/in/s%C3%A1vio-freire-263198244/" target='_blank'>
                            <AiFillLinkedin />
                        </A>
                        <A href="https://www.instagram.com/freiresavio7/" target='_blank'>
                            <AiFillInstagram />  
                        </A>
                    </Redes>
                    <Redes>
                        <A href="https://api.whatsapp.com/send?phone=5521968212882" target='_blank'>
                            <IoLogoWhatsapp/>
                        </A>
                        <A href='mailto:freiresavio7@gmail.com'target='_blank'>
                            <MdEmail/>
                        </A>
                    </Redes>
                </RedesAll>

                
            </MenuMo>
        </>
        
    )


}




