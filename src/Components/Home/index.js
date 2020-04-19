import React, { Component } from "react";
import axios from "axios";
import {
  SliderImag,
  SliderImagbody,
  SliderImagImage,
  SliderTitle,
  SliderDescription,
  SliderImagAnchor,
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
        <SliderImag className="col-4" key={sliderimage.id}>
          <SliderImagbody className="card">
            <SliderImagImage
              className="card-img-top"
              src={sliderimage.image}
              alt=""
            />
            <div className="card-body">
              <SliderTitle className="card-title">
                {sliderimage.title}
              </SliderTitle>
              <SliderDescription className="card-text">
                {sliderimage.description}
              </SliderDescription>
              <SliderImagAnchor href="{sliderimage.link}" className="btn ">
                التفاصيل
              </SliderImagAnchor>
            </div>
          </SliderImagbody>
        </SliderImag>
      );
    });

    return (
      <div className="container">
        <div className="row align-items-stretch">{sliderimages}</div>
      </div>
    );
  }
}

export default Home;
