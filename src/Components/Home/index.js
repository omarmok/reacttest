import React, { Component } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";

import {
  // SliderImag,

  SliderTitle,
  SliderDescription,
} from "./style.js";
class Home extends Component {
  state = {
    slider: [],
  };
  componentDidMount() {
    axios.get("../../data.json").then((res) => {
      this.setState({ slider: res.data.slider });
    });
  }

  render() {
    const { slider } = this.state;

    const sliderimages = slider.map((sliderimage) => {
      return (
        <Carousel.Item key={sliderimage.id}>
          <img
            className="d-block w-100"
            src={sliderimage.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <SliderTitle className="card-title">
              {sliderimage.title}
            </SliderTitle>
            <SliderDescription className="card-text">
              {sliderimage.description}
            </SliderDescription>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return <Carousel>{sliderimages}</Carousel>;
  }
}

export default Home;
