import { All,Fale,Redes } from "./styleContato"

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
                <AiFillGithub/>
                <AiFillLinkedin/>
                <AiFillInstagram/>
                <IoLogoWhatsapp/>
                <MdEmail/>
            </Redes>
        </All>
    )
}