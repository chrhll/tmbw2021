import { useRef } from 'react';

import './style.css';

import { ChevronRight } from 'react-feather';

import Slider from "react-slick";

function CustomArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`tmbw-hero-slider-arrow ${className}`}
      onClick={onClick}
      >
        <ChevronRight size={24} color='black' />
      </div>
  );
}

export default function Overview(props) {
  const slidsToScroll = 1;

  const slider = useRef()

  const slickSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: slidsToScroll,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />
  };

  return (
    <div className="tmbw-overview">
      <div className="tmbw-overview-hero">
        <div className="tmbw-overview-hero-inner">
          <div className="tmbw-overview-hero-slider">
            <Slider {...slickSettings} ref={slider}>
              <div className="tmbw-overview-hero-slide">1</div>
              <div className="tmbw-overview-hero-slide">2</div>
              <div className="tmbw-overview-hero-slide">3</div>
            </Slider>
          </div>

          <div className="tmbw-overview-hero-title">
            <div className="tmbw-overview-hero-title-inner">
              <div className="tmbw-overview-hero-box">
                <h5 className="tmbw-overview-hero-subline">
                  Saison 2020/2021
                </h5>
                <h1 className="tmbw-overview-hero-headline">
                  Entdecken Sie die Städte des Südens
                </h1>
                <p className="tmbw-overview-hero-body">
                  Durch den Schwarzwald wandern und den Bodensee erleben, in Baden-Baden entspannen und in Heidelberg Kultur genießen, am Kaiserstuhl Wein verkosten oder das Donautal mit dem Rad erkunden: Es gibt mehr als einen Grund, in Deutschlands Süden zu reisen. In das Land mit den meisten Gastronomiesternen - und den meisten Sonnenstunden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tmbw-overview-filters">
      </div>

      <div className="tmbw-overview-results">
      </div>

      <div className="tmbw-overview-banner">
      </div>

      <div className="tmbw-overview-more-results">
      </div>
    </div>
  )
}
