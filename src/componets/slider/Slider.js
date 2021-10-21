import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { CarouselContainer, CarouselTitle } from './Styles';
import Slides from './Slides';


const Slider = () => {
    return (
        <CarouselContainer>
            <CarouselTitle>
                <h2>Mi proyectos</h2>
            </CarouselTitle>

            <Carousel
                arrows
                slidesPerPage={3}
                infinite
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={400}
                slides={Slides}
            />
        </CarouselContainer>
    )
}

export default Slider
