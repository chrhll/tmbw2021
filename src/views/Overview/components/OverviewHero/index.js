import { useRef, useState } from 'react';

import './style.css';

import { ChevronRight } from 'react-feather';

import Slider from 'react-slick';

import offers from '../../../../helpers/offers';

export default function OverviewHero(props) {

  let cherryPickedCovers = []
  offers.sort(() => Math.random() - 0.5).forEach(offer => {
    if (Array.isArray(offer.pictures) && cherryPickedCovers.length <= 2) {
      cherryPickedCovers.push(offer.pictures[0])
    }
  })

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
            <img className="tmbw-overview-hero-slide" src={cherryPickedCovers[0]} alt="hero #1" />
            <img className="tmbw-overview-hero-slide" src={cherryPickedCovers[1]} alt="hero #2" />
            <img className="tmbw-overview-hero-slide" src={cherryPickedCovers[2]} alt="hero #3" />
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

              <a href="https://frib3v495xa.typeform.com/to/IrDSLxA4" className="tmbw-surprise-me">Was passt zu mir?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
