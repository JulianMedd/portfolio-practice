import React from 'react'
import { SlideContainer, SlideDesc, SlideImg } from './Styles';

    
    const slidesInfo = [
        {
          src:
            "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
          alt: "Project 1",
          desc: "Project 1",
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
          alt: "Project 2",
          desc: "Project 2",
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
          alt: "Project 3",
          desc: "Project 3",
        },
    ];


    const Slides = slidesInfo.map((slide) => (
                        <SlideContainer>
                            <SlideImg src={slide.src} alt={slide.alt} />
                            <SlideDesc>
                                <span>{slide.desc}</span>
                            </SlideDesc>
                        </SlideContainer>
                ))

export default Slides;
