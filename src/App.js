import { Router } from "@reach/router";
import { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import photo14 from "./Images/aeronol1.jpeg";
import photo15 from "./Images/aeronol2.jpeg";
import photo16 from "./Images/aeronol3.jpeg";
import photo17 from "./Images/aeronol4.jpeg";
import photo18 from "./Images/aeronol5.jpeg";
import photo19 from "./Images/amadablam.jpeg";
import photo3 from "./Images/bromo.jpeg";
import photo22 from "./Images/chichenItza3.jpeg";
import photo23 from "./Images/chichenIzta2.jpeg";
import photo21 from "./Images/chithenItza.jpeg";
import photo25 from "./Images/costaArrowFrog.jpeg";
import photo1 from "./Images/costaBeach.jpeg";
import photo24 from "./Images/costaBeach2.jpeg";
import photo26 from "./Images/costaBirds.jpeg";
import photo27 from "./Images/costaFrog.jpeg";
import photo5 from "./Images/costaFrog2.jpeg";
import photo28 from "./Images/costaSlothe2.jpeg";
import photo6 from "./Images/costaSlothe3.jpeg";
import photo29 from "./Images/costaStorm.jpeg";
import photo30 from "./Images/costaTree.jpeg";
import photo31 from "./Images/costSlothe.jpeg";
import photo32 from "./Images/edinbourough.jpeg";
import photo33 from "./Images/edinbourough2.jpeg";
import { default as photo34 } from "./Images/glenCoe.jpeg";
import photo35 from "./Images/highlandCattle.jpeg";
import photo36 from "./Images/indainTea.jpeg";
import photo11 from "./Images/indiaGoa.jpeg";
import photo37 from "./Images/indiaGoaBeach.jpeg";
import photo38 from "./Images/indiaGoaWaterfall.jpeg";
import photo39 from "./Images/indiaHill.jpeg";
import photo40 from "./Images/indiaHospital.jpeg";
import photo12 from "./Images/indiajaipaw.jpeg";
import photo41 from "./Images/indiaJaipaw3.jpeg";
import photo42 from "./Images/indiaJaipaw4.jpeg";
import photo43 from "./Images/indiaLuacknow.jpeg";
import photo44 from "./Images/indianBombay.jpeg";
import photo45 from "./Images/indianBombay2.jpeg";
import photo8 from "./Images/indianBombayBoys.jpeg";
import photo46 from "./Images/indianBus.jpeg";
import photo47 from "./Images/indianClouds.jpeg";
import photo48 from "./Images/indianDoctor.jpeg";
import photo49 from "./Images/indianGirls.jpeg";
import photo50 from "./Images/indianPalace.jpeg";
import photo51 from "./Images/indianShow.jpeg";
import photo52 from "./Images/indianUdipaw.jpeg";
import photo53 from "./Images/indiaSunset.jpeg";
import photo2 from "./Images/indiaSunset2.jpeg";
import photo13 from "./Images/indiaTag.jpeg";
import photo54 from "./Images/indiaTag2.jpeg";
import photo55 from "./Images/indiaTag3.jpeg";
import photo56 from "./Images/indiaTag4.jpeg";
import photo57 from "./Images/indiaTucTuc.jpeg";
import photo58 from "./Images/lakes.jpeg";
import photo59 from "./Images/lakes1.jpeg";
import photo10 from "./Images/lakes3.jpeg";
import photo60 from "./Images/malamCove.jpeg";
import photo4 from "./Images/mountains.jpeg";
import photo61 from "./Images/pacificSea.jpeg";
import photo62 from "./Images/scotland.jpeg";
import photo9 from "./Images/scotlandBridge.jpeg";
import photo63 from "./Images/scotlandRiver.jpeg";
import photo64 from "./Images/udiapaw2.jpeg";
import photo65 from "./Images/undipaw3.jpeg";
import AllPhotographsScreen from "./Screens/AllPhotographsScreen";
import ContactScreen from "./Screens/ContactScreen";
import FilterPhotosPage from "./Screens/FilterPhotosPage";
import LandingScreen from "./Screens/LandingScreen";
import PaymentScreen from "./Screens/PaymentScreen";

class App extends Component {
  state = {
    countries: [
      {
        photo: 1,
        country: "india",
        image: [photo65],
        description: "Lake palace. Udaipur, North India",
      },
      {
        photo: 2,
        country: "india",
        image: [photo64],
        description: "The lake front. Udaipur, North India",
      },
      {
        photo: 3,
        country: "UK",
        image: [photo63],
        description: "The end of the river. Scotland, UK",
      },
      {
        photo: 4,
        country: "UK",
        image: [photo62],
        description: "Highland Hills. Scotland, UK",
      },
      {
        photo: 5,
        country: "costa",
        image: [photo61],
        description: "Pacific ocean. West Coast, Costa Rica",
      },

      {
        photo: 6,
        country: "UK",
        image: [photo60],
        description: "Malham Cove. West Yorkshire, UK",
      },
      {
        photo: 7,
        country: "UK",
        image: [photo59],
        description: "Lost in the Lakes. Lake District, UK",
      },
      {
        photo: 8,
        country: "UK",
        image: [photo58],
        description: "Distant Lake. Lake District, UK",
      },
      {
        photo: 9,
        country: "india",
        image: [photo57],
        description: "TUC TUC ride in busy Bangalore. Bangalore, Central India",
      },
      {
        photo: 10,
        country: "india",
        image: [photo56],
        description: "The Taj. Agra, North India",
      },
      {
        photo: 11,
        country: "india",
        image: [photo54],
        description: "The Taj at sunrise. Agra, North India",
      },
      {
        photo: 12,
        country: "india",
        image: [photo55],
        description: "The gateway. Agra, North India",
      },
      {
        photo: 13,
        country: "india",
        image: [photo53],
        description: "The sunsets over Bengaluru. Bangalore, North India",
      },
      {
        photo: 14,
        country: "india",
        image: [photo52],
        description: "Focussed on the right note. Udaipur, North India",
      },
      {
        photo: 15,
        country: "india",
        image: [photo51],
        description: "Tradition. Kererla, South India",
      },
      {
        photo: 16,
        country: "india",
        image: [photo50],
        description: "Pillers fit for a palace. Kererla, South India",
      },
      {
        photo: 17,
        country: "india",
        image: [photo49],
        description:
          "The girls from the near by village. Bangalore, Central India",
      },
      {
        photo: 18,
        country: "india",
        image: [photo48],
        description:
          "Doctor from the mental health hospital. Bangalore, Central India",
      },
      {
        photo: 19,
        country: "india",
        image: [photo47],
        description: "Sunsets on storm clouds. Bangalore, Central India",
      },
      {
        photo: 20,
        country: "india",
        image: [photo46],
        description:
          "Double Decker navigating small backstreets. Mumbai, West India",
      },
      {
        photo: 21,
        country: "india",
        image: [photo45],
        description: "Chowpatty Beach Street food. Mumbai, West India",
      },
      {
        photo: 22,
        country: "india",
        image: [photo44],
        description: "The architecture of Bombay, Mumbai, West India",
      },
      {
        photo: 23,
        country: "india",
        image: [photo43],
        description: "The Central train Station. Lucknow,North India",
      },
      {
        photo: 24,
        country: "india",
        image: [photo42],
        description: "Palace on top of the lake. Jaipur, North India",
      },
      {
        photo: 25,
        country: "india",
        image: [photo41],
        description: "The red palace in the pink city. Jaipur, North India",
      },
      {
        photo: 26,
        country: "india",
        image: [photo40],
        description: "Patients. Bangalore, North India",
      },
      {
        photo: 27,
        country: "india",
        image: [photo39],
        description: "Right too the very top. Central India",
      },
      {
        photo: 62,
        country: "india",
        image: [photo38],
        description: "Goan waterfall. Goa, west India",
      },
      {
        photo: 28,
        country: "india",
        image: [photo37],
        description: "Paradise. Goa, west India",
      },
      {
        photo: 29,
        country: "india",
        image: [photo36],
        description: "Miles of tea plantations. India",
      },
      {
        photo: 30,
        country: "UK",
        image: [photo35],
        description: "Highland Beauties. Scotland, UK",
      },
      {
        photo: 31,
        country: "UK",
        image: [photo34],
        description: "Glen Coe, Scottish Highlands, UK",
      },
      {
        photo: 32,
        country: "UK",
        image: [photo33],
        description: "Busy night in Edinburgh. Scotland, UK",
      },
      {
        photo: 33,
        country: "UK",
        image: [photo32],
        description: "Central Edinburgh. Scotland, UK",
      },
      {
        photo: 34,
        country: "costa",
        image: [photo31],
        description: "Dozy sloth, Costa Rica",
      },
      {
        photo: 63,
        country: "costa",
        image: [photo30],
        description: "1000 year old tree, Costa Rica",
      },
      {
        photo: 35,
        country: "costa",
        image: [photo29],
        description: "A storm is brewing, Costa Rica",
      },
      {
        photo: 36,
        country: "mexico",
        image: [photo23],
        description: "Matchu Pichu, Yucutan, Mexico",
      },
      {
        photo: 37,
        country: "costa",
        image: [photo28],
        description: "He came to say hello. Costa Rica",
      },
      {
        photo: 38,
        country: "costa",
        image: [photo27],
        description: "Blue Jeans. Costa Rica",
      },
      {
        photo: 39,
        country: "costa",
        image: [photo26],
        description: " Birds. Costa Rica",
      },
      {
        photo: 40,
        country: "costa",
        image: [photo25],
        description: " The poison arrow frog. Costa Rica",
      },
      {
        photo: 41,
        country: "costa",
        image: [photo24],
        description: "Beautiful. Costa Rica",
      },
      {
        photo: 42,
        country: "mexico",
        image: [photo21],
        description: "Mayan. Yucatan, Mexico ",
      },
      {
        photo: 43,
        country: "mexico",
        image: [photo22],
        description: "Mayan. Yucatan, Mexico ",
      },
      {
        photo: 44,
        country: "Nepal",
        image: [photo19],
        description: "Ama Dablam, Kumbu valley, Nepal",
      },
      {
        photo: 45,
        country: "costa",
        image: [photo17],
        description: "Aeronol. Costa Rica",
      },
      {
        photo: 46,
        country: "costa",
        image: [photo18],
        description: "Creator full of clouds. Costa Rica",
      },
      {
        photo: 47,
        country: "costa",
        image: [photo16],
        description: "Aeronol. Costa Rica",
      },
      {
        photo: 48,
        country: "costa",
        image: [photo15],
        description: "Aeronol. Costa Rica",
      },
      {
        photo: 49,
        country: "costa",
        image: [photo14],
        description: "Aeronol. Costa Rica",
      },
      {
        photo: 50,
        country: "indonesia",
        image: [photo3],
        description: "Mt.Bromo. East Java, Indonesia",
      },
      {
        photo: 51,
        country: "india",
        image: [photo11],
        description: "Goan hills at sunset. Goa, India",
      },
      {
        photo: 52,
        country: "india",
        image: [photo12],
        description: "Sliver of blue, in a world of orange, Jaipur, India",
      },
      {
        photo: 53,
        country: "india",
        image: [photo8],
        description: "The Boys of Bombay. Mumbai, West India",
      },
      {
        photo: 54,
        country: "india",
        image: [photo2],
        description:
          "The Sun sets on the Indian sub-continent, Agra, North India",
      },
      {
        photo: 55,
        country: "india",
        image: [photo13],
        description: "Sunrise at the Taj, Agra, North India",
      },
      // {
      //   country: "UK",
      //   image: [photo7],
      //   description: "Glen",
      // },
      {
        photo: 56,
        country: "UK",
        image: [photo10],
        description: "Lost in the Lakes. Lake District, UK",
      },
      {
        photo: 57,
        country: "UK",
        image: [photo9],
        description: "A quiet bridge in the highlands, Scotland, UK",
      },
      {
        photo: 58,
        country: "costa",
        image: [photo5],
        description: "Bright Eyed tree frog. Costa Rica",
      },
      {
        photo: 59,
        country: "costa",
        image: [photo6],
        description: "Three toed sloth. Costa Rica",
      },
      {
        photo: 60,
        country: "costa",
        image: [photo1],
        description: "Perfect. Costa Rica",
      },
      {
        photo: 61,
        country: "Nepal",
        image: [photo4],
        description: "Highs of the himalaya. Kumbu Valley, Nepal",
      },
    ],
    photoNumbers: [],
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  getPhotoNumbers = (place) => {
    this.state.photoNumbers.push(place.photo);
  };

  filterIt = (arr1, arr2) => {
    for (let i = 0; i++; i < arr1.length) {
      for (let j = 0; j++; j < arr2.length) {
        if (arr1[i].photos === arr2[j]) {
          return arr1[i];
        }
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Header addNumber={this.increment} number={this.state.count} />
        <Router>
          <LandingScreen path="/" />
          <AllPhotographsScreen
            path="/all-photos"
            addNumber={this.increment}
            setAddNumber={this.state.count}
            countries={this.state.countries}
            addPhotoNumber={this.getPhotoNumbers}
          />
          <ContactScreen path="/contact-page" />
          <FilterPhotosPage path="/:country" />
          <PaymentScreen
            path="basket-page"
            photoNumbers={this.state.photoNumbers}
            countries={this.state.countries}
            filterIt={this.filterIt}
          />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
