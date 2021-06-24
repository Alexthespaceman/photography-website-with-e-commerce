import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import photo3 from "../../Images/bromo.jpeg";
import photo1 from "../../Images/costaBeach.jpeg";
import photo5 from "../../Images/costaFrog2.jpeg";
import photo6 from "../../Images/costaSlothe3.jpeg";
import photo7 from "../../Images/glenCoe.jpeg";
import photo11 from "../../Images/indiaGoa.jpeg";
import photo12 from "../../Images/indiajaipaw.jpeg";
import photo8 from "../../Images/indianBombayBoys.jpeg";
import photo2 from "../../Images/indiaSunset2.jpeg";
import photo13 from "../../Images/indiaTag.jpeg";
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
            <h2 className="pic-hover">Costa-Rican Beach Side</h2>
          </div>
          <div>
            <img alt="" src={photo2} />
            <h2 className="pic-hover">
              The Sun sets on the Indian sub-continent
            </h2>
          </div>
          <div>
            <img alt="" src={photo4} />
            <h2 className="pic-hover">Hights of the Himalaya</h2>
          </div>
          <div>
            <img alt="" src={photo5} />
            <h2 className="pic-hover">Sleepy Tree Frog</h2>
          </div>
          <div>
            <img alt="" src={photo6} />
            <h2 className="pic-hover">He's Lookin' at you kid</h2>
          </div>
          <div>
            <img alt="" src={photo7} />
            <h2 className="pic-hover">Glen Coe</h2>
          </div>
          <div>
            <img alt="" src={photo8} />
            <h2 className="pic-hover">The Boys of Bombay</h2>
          </div>
          <div>
            <img alt="" src={photo9} />
            <h2 className="pic-hover">A quiet bridge in the highlands</h2>
          </div>
          <div>
            <img alt="" src={photo10} />
            <h2 className="pic-hover">Lost In The Lakes</h2>
          </div>
          <div>
            <img alt="" src={photo3} />
            <h2 className="pic-hover">Mt.Bromo, East Java</h2>
          </div>
          <div>
            <img alt="" src={photo11} />
            <h2 className="pic-hover">Rolling hills of Goa, India</h2>
          </div>
          <div>
            <img alt="" src={photo12} />
            <h2 className="pic-hover">SLiver of blue, in a world of orange</h2>
          </div>
          <div>
            <img alt="" src={photo13} />
            <h2 className="pic-hover">Sunrise at the Taj</h2>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default SlideContent;
