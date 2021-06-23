import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import photo3 from "../../Images/bromo.jpeg";
import photo1 from "../../Images/costaBeach.jpeg";
import photo5 from "../../Images/costaFrog2.jpeg";
import photo6 from "../../Images/costaSlothe3.jpeg";
import photo7 from "../../Images/glenCoe.jpeg";
import photo8 from "../../Images/indianBombayBoys.jpeg";
import photo2 from "../../Images/indiaSunset2.jpeg";
import photo10 from "../../Images/lakes3.jpeg";
import photo4 from "../../Images/mountains.jpeg";
import photo9 from "../../Images/scotlandBridge.jpeg";

class SlideContent extends Component {
  state = {
    photos: [
      {
        pic1: {
          price: 40,
          description: " magnificent Amadablam",
        },
        pic2: { price: 30, description: "mt.bromo, in indo" },
        pic3: { price: 35, description: "penang street art " },
        pic4: { price: 50, description: "khumbu valley" },
      },
    ],
  };

  render() {
    return (
      <div className="carousel-wrapper">
        <Carousel
          infiniteLoop
          autoPlay
          interval={4000}
          transitionTime={500}
          stopOnHover
        >
          <div>
            <img alt="" src={photo1} />
          </div>
          <div>
            <img alt="" src={photo2} />
          </div>
          <div>
            <img alt="" src={photo4} />
          </div>
          <div>
            <img alt="" src={photo5} />
          </div>
          <div>
            <img alt="" src={photo6} />
          </div>
          <div>
            <img alt="" src={photo7} />
          </div>
          <div>
            <img alt="" src={photo8} />
          </div>
          <div>
            <img alt="" src={photo9} />
          </div>
          <div>
            <img alt="" src={photo10} />
          </div>
          <div>
            <img alt="" src={photo3} />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default SlideContent;
