import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactLogo from '../../assets/img/react-logo.jpg';
import HtmlLogo from '../../assets/img/html-logo.jpg';
import JqueryLogo from '../../assets/img/jquery-logo.jpg';


const MainCarousel = () => {
    return (
        <Carousel showThumbs={false}>
            <div>
                <img src={ReactLogo} alt="React_logo" />
            </div>
            <div>
                <img src={HtmlLogo} alt="Html_Logo" />
            </div>
            <div>
                <img src={JqueryLogo} alt="Jquery_Logo" />
            </div>
        </Carousel>
    );
};

export default MainCarousel;