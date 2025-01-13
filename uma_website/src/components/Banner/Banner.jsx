import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerimage1 from "../../assets/bannerimage1.avif";
import bannerimage2 from "../../assets/bannerimage2.avif";
import bannerimage3 from "../../assets/bannerimage3.avif";
import bannerimage4 from "../../assets/bannerimage4.avif";
import "./Banner.css";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          autoplaySpeed: 2000
        }
      }
    ]
  };

  const bannerImages = [
    { src: bannerimage1, alt: "Banner 1" },
    { src: bannerimage2, alt: "Banner 2" },
    { src: bannerimage3, alt: "Banner 3" },
    { src: bannerimage4, alt: "Banner 4" }
  ];

  return (
    <div className="banner-container">
      <div className="banner-carousel">
        <Slider {...settings}>
          {bannerImages.map((image, index) => (
            <div key={index} className="banner-slide">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Banner;