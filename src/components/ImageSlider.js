import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

import sliderBadging from "../assets/images/slider-badging.jpg";
import sliderBadag from "../assets/images/slider-badag.jpg";
import sliderScale from "../assets/images/slider-scale.jpg";
import sliderScales from "../assets/images/slider-scales.jpg";


function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={sliderBadging} alt="" />
      </Wrap>
      <Wrap>
        <img src={sliderBadag} alt="" />
      </Wrap>
      <Wrap>
        <img src={sliderScale} alt="" />
      </Wrap>
      <Wrap>
        <img src={sliderScales} alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ImageSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgba(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
      rgba(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
