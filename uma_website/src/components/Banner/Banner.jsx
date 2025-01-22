import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bannerimage1 from "../../assets/banner1.jpeg";
import bannerimage2 from "../../assets/benner2.jpeg";
import bannerimage3 from "../../assets/benner3.jpeg";
import bannerimage4 from "../../assets/banner4.jpeg";
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
    className: "slider-wrapper",
    dotsClass: "slick-dots custom-dots",
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
    <div className="banner-outer-container">
      <div className="banner-container">
        <div className="banner-carousel">
          <Slider {...settings}>
            {bannerImages.map((image, index) => (
              <div key={index} className="banner-slide">
                <div className="image-wrapper">
                  <img src={image.src} alt={image.alt} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Banner;