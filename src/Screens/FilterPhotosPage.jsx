import { Component } from "react";
import photo3 from "../Images/bromo.jpeg";
import photo1 from "../Images/costaBeach.jpeg";
import photo5 from "../Images/costaFrog2.jpeg";
import photo6 from "../Images/costaSlothe3.jpeg";
import photo7 from "../Images/glenCoe.jpeg";
import photo11 from "../Images/indiaGoa.jpeg";
import photo12 from "../Images/indiajaipaw.jpeg";
import photo8 from "../Images/indianBombayBoys.jpeg";
import photo2 from "../Images/indiaSunset2.jpeg";
import photo13 from "../Images/indiaTag.jpeg";
import photo10 from "../Images/lakes3.jpeg";
import photo4 from "../Images/mountains.jpeg";
import photo9 from "../Images/scotlandBridge.jpeg";

class FilterPhotosPage extends Component {
  state = {
    countries: [
      {
        country: "indonesia",
        image: [photo3],
        description: "Beautiful",
      },
      {
        country: "india",
        image: [photo11, photo12, photo8, photo2, photo13],
        description: "Beautiful",
      },
      {
        country: "UK",
        image: [photo7, photo10, photo9],
        description: "Beautiful",
      },
      {
        country: "costa",
        image: [photo5, photo6, photo1],
        description: "Beautiful",
      },
      {
        country: "nepal",
        image: [photo4],
        description: "Beautiful",
      },
    ],
  };

  render() {
    let { country } = this.props;

    return (
      <div className="filtered-photos-title">
        {this.state.countries
          .filter((place) => {
            return country == place.country;
          })
          .map((place) => {
            return (
              <div>
                <img src={place.image[0]} />
                <img src={place.image[1]} />
                <img src={place.image[2]} />
                <img src={place.image[3]} />
                <p>{place.description}</p>
                <p>{place.country}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default FilterPhotosPage;
