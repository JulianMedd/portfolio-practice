import React from 'react';
import {
    AboutContainer,
    AboutDesc,
    AboutImg,
    AboutText,
    AboutTitle
} from './Styles';
import foto from "../../media/foto_perfila.jpg";

const About = () => {
    return (
        <AboutContainer>
            <AboutDesc>
                <AboutTitle>Sobre mi</AboutTitle>
                <AboutText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                    provident inventore quod voluptates sequi. Quis, necessitatibus omnis
                    iusto perferendis dolores voluptate et dolorum inventore autem nemo,
                    quos eveniet magni nesciunt.
                </AboutText>              
            </AboutDesc>
            <AboutImg>
                <img src={ foto } alt="foto perfil"/>
            </AboutImg>
        </AboutContainer>
    )
}

export default About
