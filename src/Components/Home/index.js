import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
    state = {
        slider: []
    }
    componentDidMount() {
        axios.get('../../data.json').then(res => { this.setState({ slider: res.data.users }) })
    }

    render() {
        const { slider } = this.state;

        const sliderimages = slider.map((sliderimage) => {
            return (
                <div className="col-4" key={sliderimage.id}>
                    <div className="card" >
                        <img className="card-img-top" src={sliderimage.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{sliderimage.Job}</h5>
                            <p className="card-text">{sliderimage.description}</p>
                        </div>

                    </div>
                </div>

            )

        })

        return (
            <div className="container">
                <div className="row">
                    {sliderimages}
                </div>
            </div>

        );
    }

}


export default Home;
