import { All,Fale,Redes,A } from "./styleContato"

import { AiFillLinkedin,AiFillInstagram,AiFillGithub } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

export default function Contato(){

    return(
        <All>
            <Fale>
                Fale Comigo
            </Fale>
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
                <A href="https://api.whatsapp.com/send?phone=5521968212882" target='_blank'>
                    <IoLogoWhatsapp/>
                </A>
                <A href='mailto:freiresavio7@gmail.com'target='_blank'>
                    <MdEmail/>
                </A>
            </Redes>
        </All>
    )
}