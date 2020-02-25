import React from "react";
import './Carousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends React.Component {
    render() { 
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
        <div className="carousel">
            <Slider {...settings}>
                <div>
                    <img src={require('../Assets/1.jpg')} />
                </div>
                <div>
                    <img src={require('../Assets/2.jpg')} />
                </div>
                <div>
                    <img src={require('../Assets/3.jpg')} />
                </div>
                <div>
                    <img src={require('../Assets/4.jpg')} />
                </div>
                <div>
                    <img src={require('../Assets/5.jpg')} />
                </div>
            </Slider>
        </div>
        );
    }
}