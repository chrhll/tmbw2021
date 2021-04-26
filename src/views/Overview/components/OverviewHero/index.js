import { useRef, useState } from 'react';

import './style.css';

import { ChevronRight } from 'react-feather';

import Slider from "react-slick";

export default function OverviewHero(props) {
  const slidesToScroll = 0.974025974026;

  const slider = useRef()

  function CustomArrow(props) {
    const [invert, setInvert] = useState(false)

    const { className, onClick } = props;

    function customOnClick(args) {
      // locate slides
      const allSlides = document.querySelectorAll('.tmbw-overview-hero .slick-slide')

      // find active slide
      let activeIndex = 0;
      for (let i = 0; i < allSlides.length; i++) {
        if (Array.from(allSlides[i].classList).includes('slick-active')) {
          activeIndex = i;
          break;
        }
      }

      if (activeIndex === allSlides.length-2) {
        setInvert(true)
        onClick(args)
      } else if (activeIndex === allSlides.length-1) {
        slider.current.slickGoTo(0)
        setInvert(false)
      } else {
        onClick(args)
      }
    }

    return (
      <div
        className={`tmbw-hero-slider-arrow ${invert ? 'tmbw-hero-slider-arrow-invert' : ''} ${className}`}
        onClick={customOnClick}
        >
          <ChevronRight size={24} color='black' />
        </div>
    );
  }

  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: slidesToScroll,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />
  };

  return (
    <div className="tmbw-overview-hero">
      <div className="tmbw-overview-hero-inner">
        <div className="tmbw-overview-hero-slider">
          <Slider {...slickSettings} ref={slider}>
            <div className="tmbw-overview-hero-slide"></div>
            <div className="tmbw-overview-hero-slide"></div>
            <div className="tmbw-overview-hero-slide"></div>
          </Slider>
        </div>

        <div className="tmbw-overview-hero-title">
          <div className="tmbw-overview-hero-title-inner">
            <div className="tmbw-overview-hero-box">
              <h5 className="tmbw-overview-hero-subline">
                Saison 2021
              </h5>
              <h1 className="tmbw-overview-hero-headline">
                Entdecke die Städte des Südens
              </h1>
              <p className="tmbw-overview-hero-body">
                Geniesse die Vielfalt der Städte Baden-Württembergs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
