import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import './App.css';
import 'tachyons';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '674fa520097e4f9389be7e9e95f79450'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 85,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}


class App extends React.Component {
  constructor(){
    super();
    this.state={
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    //console.log('click');
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
     .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
     .catch(err => console.log(err));
  }

  render() {
  return (
    <div>
    <div className="App">
      <Particles className='particles'
       params={particlesOptions}
       />
      <Navigation />
      <Logo />
      <Rank/>
      <ImageLinkForm 
      onInputChange={this.onInputChange}
      onButtonSubmit={this.onButtonSubmit}
      />
      <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
    </div>
    
    </div>
  );
}
}

export default App;


      //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      // do something with response
      //console.log(response);