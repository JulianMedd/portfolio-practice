import React from 'react';
import coderVideo from "../../media/coderVideo.mp4";
import 
{ 
    CoverContainer,
    Video,
    Title,
    Text
} from './Styles';

const Cover = () => {
    return (
        <CoverContainer>
            <Video src={coderVideo} autoPlay loop muted/>
            <Title>Israel Julian Medina</Title>
            <Text>Desarrollador FrontEnd | Diseñador Gráfico</Text>
        </CoverContainer>
    )
}

export default Cover
