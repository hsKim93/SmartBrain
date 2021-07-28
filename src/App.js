import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

// Clarifai API
const app = new Clarifai.App({
  apiKey: '6bf9ebec22ac468dac22dc0bd0d2b59d'
});

// particles parameters
const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imgURL: '',
    }
  }

  onButtonSubmit = () => {
    this.setState({ imgURL: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      })
      .catch((err) => {
        console.log('Something is wrong', err);
      })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imgURL={this.state.imgURL}/>
      </div>
    );
  }
}

export default App;
